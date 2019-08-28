// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import PlasmidDetailsList from "./PlasmidDetailsList"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import ShoppingButtons from "components/Stocks/DetailsPageItems/ShoppingButtons"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"

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

const useStyles = makeStyles({
  layout: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    "& a": {
      textDecoration: "none",
    },
  },
})

type Props = {
  /** React Router object */
  match: Object,
}

/**
 * PlasmidDetailsContainer is the main component for an individual plasmid details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidDetailsContainer = ({ match }: Props) => {
  const classes = useStyles()

  return (
    <Query query={GET_PLASMID} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        const title = `Plasmid Details for ${data.plasmid.id}`

        return (
          <Grid container spacing={2} className={classes.layout}>
            <Helmet>
              <title>{title} - Dicty Stock Center</title>
              <meta
                name="description"
                content={`Dicty Stock Center plasmid details page for ${data.plasmid.id}`}
              />
            </Helmet>
            <Grid item xs={12}>
              <StockDetailsHeader title={title} />
            </Grid>
            <Grid item xs={12}>
              <PlasmidDetailsList data={data.plasmid} />
              <ShoppingButtons
                type="plasmid"
                id={data.plasmid.id}
                name={data.plasmid.name}
                inStock={data.plasmid.in_stock}
              />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter<*>(PlasmidDetailsContainer)
