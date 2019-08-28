// @flow
import React from "react"
import { Helmet } from "react-helmet"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import PlasmidCatalogList from "components/Stocks/Plasmids/Catalog/PlasmidCatalogList"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"

export const GET_PLASMID_LIST = gql`
  query PlasmidList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
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

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidCatalogContainer = () => {
  const classes = useStyles()

  return (
    <Query query={GET_PLASMID_LIST} variables={{ cursor: 0 }}>
      {({ loading, error, data, fetchMore }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        return (
          <Grid container spacing={2} className={classes.layout}>
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
            <Grid item xs={12}>
              <PlasmidCatalogList
                data={data.listPlasmids.plasmids}
                fetchMore={fetchMore}
                cursor={data.listPlasmids.nextCursor}
              />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default PlasmidCatalogContainer
