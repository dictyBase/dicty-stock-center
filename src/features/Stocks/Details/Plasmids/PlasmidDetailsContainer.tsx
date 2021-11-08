import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Box from "@material-ui/core/Box"
import { usePlasmidQuery } from "dicty-graphql-schema"
import PlasmidDetailsCard from "./PlasmidDetailsCard"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"

/**
 * PlasmidDetailsContainer is the main component for an individual plasmid details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */
const PlasmidDetailsContainer = () => {
  const { id } = useParams()
  const { loading, error, data } = usePlasmidQuery({
    variables: { id: id ? id : "" },
    errorPolicy: "ignore",
    fetchPolicy: "cache-and-network",
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const title = `Plasmid Details for ${data?.plasmid?.name}`

  return (
    <Box textAlign="center">
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center plasmid details page for ${data?.plasmid?.id}`}
        />
      </Helmet>

      {data?.plasmid && (
        <React.Fragment>
          <DetailsHeader id={data.plasmid.id} name={data.plasmid.name} />
          <PlasmidDetailsCard data={data.plasmid} />
        </React.Fragment>
      )}
    </Box>
  )
}

export default PlasmidDetailsContainer
