import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Box from "@material-ui/core/Box"
import { useStrainQuery } from "dicty-graphql-schema"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import StrainDetailsCard from "./StrainDetailsCard"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import characterConverter from "common/utils/characterConverter"

/**
 * StrainDetailsContainer is the main component for an individual strain details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */
const StrainDetailsContainer = () => {
  const { id } = useParams()
  const { loading, error, data } = useStrainQuery({
    variables: { id: id + "" },
    errorPolicy: "ignore",
    fetchPolicy: "cache-and-network",
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const label = characterConverter(data?.strain?.label as string)
  let title = `Strain Details for ${label}`
  if (data?.strain?.phenotypes && data.strain.phenotypes.length > 0) {
    title = `Phenotype and Strain Details for ${label}`
  }

  return (
    <Box textAlign="center">
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center strain details page for ${label}`}
        />
      </Helmet>
      {data?.strain && (
        <React.Fragment>
          <DetailsHeader id={data.strain.id} name={data.strain.label} />
          <StrainDetailsCard data={data.strain} />
        </React.Fragment>
      )}
    </Box>
  )
}

export { StrainDetailsContainer }
export default StrainDetailsContainer
