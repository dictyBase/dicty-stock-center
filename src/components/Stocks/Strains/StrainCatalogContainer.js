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
import StrainCatalogTable from "./StrainCatalogTable"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })

const GET_STRAIN_LIST = gql`
  query StrainList($cursor: Int!) {
    listStrains(input: { cursor: $cursor, limit: 10 }) {
      totalCount
      strains {
        id
        label
        summary
      }
    }
  }
`

type Props = {
  classes: Object,
}

/**
 * StrainCatalogContainer is the main component for the strain catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const StrainCatalogContainer = (props: Props) => {
  const { classes } = props

  return (
    <Query query={GET_STRAIN_LIST} variables={{ cursor: 0 }}>
      {({ loading, error, data }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        return (
          <Grid container spacing={16} className={classes.layout}>
            <Helmet>
              <title>Strain Catalog - Dicty Stock Center</title>
              <meta
                name="description"
                content={"Dicty Stock Center strain catalog"}
              />
            </Helmet>
            <Grid item xs={12}>
              <StockDetailsHeader title="Strain Catalog" />
            </Grid>
            <Grid item xs={12}>
              <StrainCatalogTable data={data.listStrains.strains} />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter(withStyles(styles)(StrainCatalogContainer))
