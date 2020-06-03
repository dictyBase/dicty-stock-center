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

  return (
    <div>
      <Helmet>
        <title>{phenotype} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center phenotype search results for ${phenotype}`}
        />
      </Helmet>
      <PhenotypeList
        data={data.listStrainsWithPhenotype.strains}
        fetchMore={fetchMore}
        cursor={data.listStrainsWithPhenotype.nextCursor}
      />
    </div>
  )
}

export default PhenotypesContainer
