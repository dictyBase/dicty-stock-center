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

const useStyles = makeStyles({
  layout: {
    width: "95%",
    margin: "auto",
    textAlign: "center",
  },
  gridItem: {
    marginBottom: "20px",
  },
})

const cleanQuery = (phenotype: string) => phenotype.split("+").join(" ")

type Params = {
  /** Phenotype name from URL */
  name: string
}

/**
 * PhenotypeContainer is used to fetch a list of strains with a given phenotype.
 */

const PhenotypeContainer = () => {
  const [hasMore, setHasMore] = React.useState(true)
  const classes = useStyles()
  const { name } = useParams<Params>()
  const phenotype = cleanQuery(name)
  const { loading, error, data, fetchMore } = useQuery(
    GET_STRAIN_LIST_WITH_PHENOTYPE,
    {
      variables: { cursor: 0, limit: 10, phenotype },
    },
  )

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const loadMoreItems = () =>
    fetchMore({
      query: GET_STRAIN_LIST_WITH_PHENOTYPE,
      variables: {
        cursor: data.listStrainsWithPhenotype.nextCursor,
        limit: 10,
        phenotype,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        const previousEntry = previousResult.listStrainsWithPhenotype
        const previousStrains = previousEntry.strains
        const newStrains = fetchMoreResult.listStrainsWithPhenotype.strains
        const newCursor = fetchMoreResult.listStrainsWithPhenotype.nextCursor
        const allStrains = [...previousStrains, ...newStrains]

        if (newCursor === 0) {
          setHasMore(false)
        }

        return {
          listStrainsWithPhenotype: {
            nextCursor: newCursor,
            strains: [...new Set(allStrains)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

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
            data={data.listStrainsWithPhenotype.strains}
            loadMoreItems={loadMoreItems}
            hasMore={hasMore}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PhenotypeContainer
