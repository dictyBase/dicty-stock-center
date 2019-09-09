// @flow
import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import PlasmidCatalogList from "./PlasmidCatalogList"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"

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
  const { query, variables } = usePlasmidCatalogState()
  const classes = useStyles()

  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data, fetchMore }) => {
        if (loading) return <StockDetailsLoader />

        return (
          <Grid container spacing={2} className={classes.layout}>
            <Grid item xs={12}>
              <StockDetailsHeader title="Plasmid Catalog" />
            </Grid>
            <Grid item xs={12}>
              <PlasmidCatalogAppBar />
            </Grid>
            <Grid item xs={12}>
              {error ? (
                <GraphQLErrorPage error={error} />
              ) : (
                <PlasmidCatalogList
                  data={data.listPlasmids.plasmids}
                  fetchMore={fetchMore}
                  cursor={data.listPlasmids.nextCursor}
                  filter={variables.filter}
                />
              )}
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default PlasmidCatalogContainer
