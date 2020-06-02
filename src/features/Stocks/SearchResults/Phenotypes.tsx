import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"

const cleanQuery = (phenotype: string) => phenotype.split("+").join(" ")

/**
 * Phenotypes is used to fetch a list of strains with a given phenotype.
 */

const Phenotypes = () => {
  const { name } = useParams()
  const phenotype = cleanQuery(name)
  const { loading, error, data } = useQuery(GET_STRAIN_LIST_WITH_PHENOTYPE, {
    variables: { cursor: 0, limit: 1000, phenotype },
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>
          Phenotype Search Results for {phenotype} - Dicty Stock Center
        </title>
        <meta
          name="description"
          content={`Dicty Stock Center phenotype search results for ${phenotype}`}
        />
      </Helmet>
    </div>
  )
}

export default Phenotypes
