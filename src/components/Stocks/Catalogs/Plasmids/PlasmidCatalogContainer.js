// @flow
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import PlasmidCatalogList from "./PlasmidCatalogList"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidCatalogContainer = () => {
  const [{ query, queryVariables }] = useCatalogState()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <PlasmidCatalogList
      data={data.listPlasmids.plasmids}
      fetchMore={fetchMore}
      cursor={data.listPlasmids.nextCursor}
    />
  )

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
