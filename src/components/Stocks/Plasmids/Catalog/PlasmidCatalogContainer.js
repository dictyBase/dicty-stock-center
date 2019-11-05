// @flow
import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "components/Stocks/CatalogPageItems/CatalogHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import CatalogErrorMessage from "components/Stocks/CatalogPageItems/CatalogErrorMessage"
import PlasmidCatalogList from "./PlasmidCatalogList"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"
import useStyles from "components/Stocks/CatalogPageItems/catalogStyles"

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

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidCatalogContainer = () => {
  const {
    query,
    queryVariables,
    setQuery,
  }: {
    query: string,
    queryVariables: Object,
    setQuery: Function,
  } = usePlasmidCatalogState()
  const classes = useStyles()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })

  let content

  if (loading) return <StockDetailsLoader />

  if (error) {
    content = <CatalogErrorMessage error={error} />
    setQuery(GET_PLASMID_LIST)
  } else {
    content = (
      <PlasmidCatalogList
        data={data.listPlasmids.plasmids}
        fetchMore={fetchMore}
        cursor={data.listPlasmids.nextCursor}
        filter={queryVariables.filter}
      />
    )
  }

  return (
    <Grid container spacing={0} className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Plasmid Catalog" />
      </Grid>
      <Grid item xs={12}>
        <PlasmidCatalogAppBar />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default PlasmidCatalogContainer
