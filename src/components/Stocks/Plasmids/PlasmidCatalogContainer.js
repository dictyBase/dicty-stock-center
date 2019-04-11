// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import createStyles from "@material-ui/core/styles/createStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import StockDetailsHeader from "../StockDetailsHeader"
import StockDetailsLoader from "../StockDetailsLoader"
import GraphQLErrorPage from "components/GraphQLErrorPage"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })

const GET_PLASMID_LIST = gql`
  query PlasmidList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
      totalCount
      plasmids {
        id
        summary
      }
    }
  }
`

type Props = {
  classes: Object,
}

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidCatalogContainer = (props: Props) => {
  const { classes } = props

  return (
    <Query query={GET_PLASMID_LIST} variables={{ cursor: 0 }}>
      {({ loading, error, data }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        return (
          <Grid container spacing={16} className={classes.layout}>
            <Helmet>
              <title>Plasmid Catalog - Dicty Stock Center</title>
              <meta
                name="description"
                content={"Dicty Stock Center plasmid catalog"}
              />
            </Helmet>
            <Grid item xs={12}>
              <StockDetailsHeader title="Plasmid Catalog" />
            </Grid>
            <Grid item xs={12} />
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter(withStyles(styles)(PlasmidCatalogContainer))
