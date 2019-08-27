// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import StrainCatalogAppBarLeftMenu from "components/Stocks/Strains/Catalog/StrainCatalogAppBarLeftMenu"
import StrainCatalogAppBarSearch from "components/Stocks/Strains/Catalog/StrainCatalogAppBarSearch"
import StrainCatalogAppBarRightMenu from "components/Stocks/Strains/Catalog/StrainCatalogAppBarRightMenu"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#0059b3",
  },
}))

/**
 * StrainCatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const StrainCatalogAppBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container justify="flex-start">
          <StrainCatalogAppBarLeftMenu />
        </Grid>
        <Grid container justify="center">
          <StrainCatalogAppBarSearch />
        </Grid>
        <Grid container justify="flex-end">
          <StrainCatalogAppBarRightMenu />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default StrainCatalogAppBar
