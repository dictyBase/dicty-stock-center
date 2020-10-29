import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import ResultsHeader from "./ResultsHeader"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"
import PhenotypeList from "./PhenotypeList"
import { StrainWithPhenotype } from "features/Stocks/Details/types/props"

const useStyles = makeStyles({
  layout: {
    width: "95%",
    margin: "auto",
    textAlign: "center",
  },
  gridItem: {
    marginBottom: "20px",
  },
  resultsText: {
    marginTop: "20px !important",
  },
})

// remove "+" from phenotype params to get the proper name
// i.e. "abolished+protein+phosphorylation" = "abolished protein phosphorylation"
const cleanQuery = (phenotype: string) => phenotype.split("+").join(" ")

type Params = {
  /** Phenotype name from URL */
  name: string
}

type ListStrainsWithPhenotype = {
  listStrainsWithPhenotype: {
    /** Typename given by Apollo Client ("StrainListWithCursor") */
    __typename: string
    /** Cursor used to fetch next set of items */
    nextCursor: number
    /** Total count of strains returned from query */
    totalCount: number
    /** Array of strain data */
    strains: Array<StrainWithPhenotype>
  }
}

/**
 * updateListData is used to return merged data
 */
const updateListData = (
  setIsLoadingMore: (arg0: boolean) => void,
  setHasMore: (arg0: boolean) => void,
  previousResult: ListStrainsWithPhenotype,
  fetchMoreResult?: ListStrainsWithPhenotype,
) => {
  setIsLoadingMore(false)
  if (!fetchMoreResult) return previousResult

  const {
    strains: newStrains,
    nextCursor: newCursor,
    totalCount,
    __typename,
  } = fetchMoreResult.listStrainsWithPhenotype
  const previousStrains = previousResult.listStrainsWithPhenotype.strains

  const mergedStrains = [...previousStrains, ...newStrains]

  if (newCursor === 0) {
    setHasMore(false)
  }

  return {
    listStrainsWithPhenotype: {
      nextCursor: newCursor,
      totalCount: totalCount,
      strains: [...new Set(mergedStrains)], // remove any duplicate entries
      __typename: __typename,
    },
  }
}

/**
 * Custom hook to handle all fetching/refetching logic
 * */
const useListStrainsWithPhenotype = (phenotype: string) => {
  const [hasMore, setHasMore] = React.useState(true)
  const [isLoadingMore, setIsLoadingMore] = React.useState(false)
  const [prevCursor, setPrevCursor] = React.useState(null)
  const { loading, error, data, fetchMore } = useQuery(
    GET_STRAIN_LIST_WITH_PHENOTYPE,
    {
      variables: { cursor: 0, limit: 50, phenotype },
      errorPolicy: "all",
    },
  )

  const loadMoreItems = () => {
    const newCursor = data.listStrainsWithPhenotype.nextCursor
    if (newCursor === prevCursor || newCursor === 0) {
      return
    }
    setPrevCursor(newCursor)
    setIsLoadingMore(true)
    fetchMore({
      variables: {
        cursor: newCursor,
        limit: 50,
        phenotype,
      },
      updateQuery: (
        previousResult: ListStrainsWithPhenotype,
        { fetchMoreResult }: { fetchMoreResult?: ListStrainsWithPhenotype },
      ) =>
        updateListData(
          setIsLoadingMore,
          setHasMore,
          previousResult,
          fetchMoreResult,
        ),
    })
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
  const { name } = useParams<Params>()
  const phenotype = cleanQuery(name)
  const {
    loading,
    error,
    data,
    loadMoreItems,
    hasMore,
    isLoadingMore,
  } = useListStrainsWithPhenotype(phenotype)

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
      <Grid container className={classes.layout}>
        <Grid item xs={12} className={classes.gridItem}>
          <ResultsHeader property="Phenotype" description={phenotype} />
        </Grid>
        <Grid item xs={12}>
          <PhenotypeList
            loadMore={loadMoreItems}
            hasMore={hasMore}
            isLoadingMore={isLoadingMore}
            data={data.listStrainsWithPhenotype.strains}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PhenotypeContainer
