// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import StockDetailsHeader from "../StockDetailsHeader"
import PlasmidDetailsList from "./PlasmidDetailsList"
import ShoppingButtons from "../ShoppingButtons"
import StockDetailsLoader from "../StockDetailsLoader"
import GraphQLErrorPage from "components/GraphQLErrorPage"

const styles = theme => ({
  layout: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
})

const GET_PLASMID = gql`
  query Plasmid($id: ID!) {
    plasmid(id: $id) {
      id
      summary
      depositor
      dbxrefs
      genes
      image_map
      sequence
      keywords
      genbank_accession
    }
  }
`

type Props = {
  classes: Object,
  title: string,
  match: Object,
}

/**
 * PlasmidDetailsContainer is the main component for an individual plasmid details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidDetailsContainer = (props: Props) => {
  const { classes, match } = props

  return (
    <Query query={GET_PLASMID} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        const title = `Plasmid Details for ${data.plasmid.id}`

        return (
          <Grid container spacing={16} className={classes.layout}>
            <Helmet>
              <title>{title} - Dicty Stock Center</title>
              <meta
                name="description"
                content={`Dicty Stock Center plasmid details page for ${
                  data.plasmid.id
                }`}
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
                name={data.plasmid.id}
              />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter(withStyles(styles)(PlasmidDetailsContainer))
