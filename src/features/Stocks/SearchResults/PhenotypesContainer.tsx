import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"
import PhenotypeList from "./PhenotypeList"

const cleanQuery = (phenotype: string) => phenotype.split("+").join(" ")
/**
 * PhenotypesContainer is used to fetch a list of strains with a given phenotype.
 */

const PhenotypesContainer = () => {
  const { name } = useParams()
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
          return previousResult
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
    <div>
      <Helmet>
        <title>{phenotype} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center search results for strains with ${phenotype}`}
        />
      </Helmet>
      <PhenotypeList
        data={data.listStrainsWithPhenotype.strains}
        loadMoreItems={loadMoreItems}
        phenotype={phenotype}
      />
    </div>
  )
}

export default PhenotypesContainer
