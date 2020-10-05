import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import PlasmidDetailsLeftCard from "./PlasmidDetailsLeftCard"
import PlasmidDetailsRightColumn from "./PlasmidDetailsRightColumn"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_PLASMID } from "common/graphql/queries"
import useStyles from "features/Stocks/Details/styles"

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
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_PLASMID, {
    variables: { id },
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const title = `Plasmid Details for ${data.plasmid.name}`

  return (
    <Grid container spacing={2} className={classes.root}>
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center plasmid details page for ${data.plasmid.id}`}
        />
      </Helmet>
      <DetailsHeader
        stockType="plasmid"
        id={data.plasmid.id}
        name={data.plasmid.name}
      />
      <PlasmidDetailsLeftCard data={data.plasmid} />
      <PlasmidDetailsRightColumn data={data.plasmid} />
    </Grid>
  )
}

export { PlasmidDetailsContainer }
export default PlasmidDetailsContainer
