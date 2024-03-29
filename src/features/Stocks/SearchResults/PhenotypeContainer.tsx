import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery, ApolloQueryResult } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import ResultsHeader from "./ResultsHeader"
import PhenotypeList from "./PhenotypeList"
import { ListStrainsWithPhenotypeDocument } from "dicty-graphql-schema"
import { ListStrainsWithAnnotation } from "common/graphql/pagination"

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
  gridItem: {
    marginTop: "10px",
    marginBottom: "20px",
  },
  resultsText: {
    marginTop: "20px !important",
  },
})

// remove "+" from phenotype params to get the proper name
// i.e. "abolished+protein+phosphorylation" = "abolished protein phosphorylation"
const cleanQuery = (phenotype: string) => phenotype.split("+").join(" ")

type ListData = {
  /** Object returned from fetching list data */
  listStrainsWithAnnotation: ListStrainsWithAnnotation
}

/**
 * Custom hook to handle all fetching/refetching logic
 * */
const useListStrainsWithPhenotype = (phenotype: string) => {
  const [hasMore, setHasMore] = React.useState(true)
  const [isLoadingMore, setIsLoadingMore] = React.useState(false)
  const [prevCursor, setPrevCursor] = React.useState(null)
  const { loading, error, data, fetchMore } = useQuery(
    ListStrainsWithPhenotypeDocument,
    {
      variables: {
        cursor: 0,
        limit: 50,
        type: "phenotype",
        annotation: phenotype,
      },
      errorPolicy: "all",
    },
  )

  const loadMoreItems = async () => {
    const newCursor = data.listStrainsWithAnnotation.nextCursor
    // need to check for same cursor to prevent extra fetching
    // https://github.com/apollographql/apollo-client/issues/5901
    if (newCursor === prevCursor || newCursor === 0) {
      return
    }
    setPrevCursor(newCursor)
    setIsLoadingMore(true)
    const res: ApolloQueryResult<ListData> = await fetchMore({
      variables: {
        cursor: data.listStrainsWithAnnotation.nextCursor,
        limit: 50,
        type: "phenotype",
        annotation: phenotype,
      },
    })
    if (res.data) {
      setIsLoadingMore(false)
    }
    if (res.data.listStrainsWithAnnotation.nextCursor === 0) {
      setHasMore(false)
    }
  }

  return {
    loading,
    error,
    data,
    loadMoreItems,
    hasMore,
    isLoadingMore,
  }
}

/**
 * PhenotypeContainer is used to fetch a list of strains with a given phenotype.
 */

const PhenotypeContainer = () => {
  const classes = useStyles()
  const { name } = useParams()
  const phenotype = cleanQuery(name ? name : "")
  const { loading, error, data, loadMoreItems, hasMore, isLoadingMore } =
    useListStrainsWithPhenotype(phenotype)

  if (loading) return <DetailsLoader />

  if (error && !data) {
    return <GraphQLErrorPage error={error} />
  }

  return (
    <>
      <Helmet>
        <title>
          Phenotype Search Results for {phenotype} - Dicty Stock Center
        </title>
        <meta
          name="description"
          content={`Dicty Stock Center search results for strains with ${phenotype}`}
        />
      </Helmet>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.gridItem}>
          <ResultsHeader property="Phenotype" description={phenotype} />
        </Grid>
        <Grid item xs={12}>
          <PhenotypeList
            loadMore={loadMoreItems}
            hasMore={hasMore}
            isLoadingMore={isLoadingMore}
            data={data.listStrainsWithAnnotation.strains}
            totalCount={data.listStrainsWithAnnotation.totalCount}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PhenotypeContainer
