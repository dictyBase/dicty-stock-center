import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import PlasmidDetailsCard from "./PlasmidDetailsCard"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_PLASMID } from "common/graphql/queries/stocks/details"

type Params = {
  /** Stock ID from URL */
  id: string
}

/**
 * PlasmidDetailsContainer is the main component for an individual plasmid details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

const PlasmidDetailsContainer = () => {
  const { id } = useParams<Params>()
  const { loading, error, data } = useQuery(GET_PLASMID, {
    variables: { id },
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const title = `Plasmid Details for ${data.plasmid.name}`

  return (
    <Grid container spacing={2}>
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center plasmid details page for ${data.plasmid.id}`}
        />
      </Helmet>
      <DetailsHeader id={data.plasmid.id} name={data.plasmid.name} />
      <PlasmidDetailsCard data={data.plasmid} />
    </Grid>
  )
}

export default PlasmidDetailsContainer
