// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import PlasmidCatalogAppBarLeftMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarLeftMenu"
import PlasmidCatalogAppBarSearch from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch"
import PlasmidCatalogAppBarRightMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarRightMenu"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#0059b3",
  },
}))

/**
 * PlasmidCatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const PlasmidCatalogAppBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container justify="flex-start">
          <PlasmidCatalogAppBarLeftMenu />
        </Grid>
        <Grid container justify="center">
          <PlasmidCatalogAppBarSearch />
        </Grid>
        <Grid container justify="flex-end">
          <PlasmidCatalogAppBarRightMenu />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default PlasmidCatalogAppBar
