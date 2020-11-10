import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import AppBarLeftMenu from "features/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "features/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "features/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { AppBarProvider } from "features/Stocks/Catalogs/common/AppBar/AppBarContext"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import useStyles from "features/Stocks/Catalogs/styles"

type Props = {
  /** List of items to display in left dropdown menu */
  leftDropdownItems: Array<{
    name: string
    value: string
  }>
  /** List of items to display in right dropdown menu */
  rightDropdownItems: Array<{ name: string; value: string }>
  /** Stock or Plasmid */
  stockType: string
}

/**
 * CatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const CatalogAppBar = ({
  leftDropdownItems,
  rightDropdownItems,
  stockType,
}: Props) => {
  const [, dispatch] = useCatalogStore()
  const classes = useStyles()

  return (
    <AppBarProvider stockType={stockType}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden smDown>
              <Grid item xs={4}>
                <Grid container justify="flex-start">
                  <AppBarLeftMenu
                    dropdownItems={leftDropdownItems}
                    stockType={stockType}
                  />
                </Grid>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={4}>
              <Grid container justify="center">
                <AppBarSearch
                  dropdownItems={rightDropdownItems}
                  catalogDispatch={dispatch}
                />
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item xs={4}>
                <Grid container justify="flex-end">
                  <AppBarRightMenu />
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </AppBarProvider>
  )
}

export default CatalogAppBar
