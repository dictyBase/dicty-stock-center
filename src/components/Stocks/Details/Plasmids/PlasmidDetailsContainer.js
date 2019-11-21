// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import PlasmidDetailsLeftCard from "./PlasmidDetailsLeftCard"
import PlasmidDetailsRightColumn from "./PlasmidDetailsRightColumn"
import DetailsHeader from "components/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import useStyles from "components/Stocks/Details/styles"

export const GET_PLASMID = gql`
  query Plasmid($id: ID!) {
    plasmid(id: $id) {
      id
      name
      summary
      depositor
      publications {
        id
      }
      dbxrefs
      genes
      image_map
      sequence
      keywords
      genbank_accession
      in_stock
    }
  }
`

type Props = {
  /** React Router object */
  match: Object,
}

/**
 * PlasmidDetailsContainer is the main component for an individual plasmid details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidDetailsContainer = ({ match }: Props) => {
  const { id } = useParams()
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_PLASMID, {
    variables: { id },
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const title = `Plasmid Details for ${data.plasmid.id}`

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

export default PlasmidDetailsContainer
