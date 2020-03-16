import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import AppBarLeftMenu from "components/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "components/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { AppBarProvider } from "components/Stocks/Catalogs/common/AppBar/AppBarContext"
import { useCatalogStore } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

type Props = {
  /** List of items to display in left dropdown menu */
  leftDropdownItems: Array<{
    name: string
    value: string
  }>
  /** List of items to display in right dropdown menu */
  rightDropdownItems: Array<{ name: string; value: string }>
}

/**
 * CatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const CatalogAppBar = ({ leftDropdownItems, rightDropdownItems }: Props) => {
  const [, dispatch] = useCatalogStore()
  const classes = useStyles()

  return (
    <AppBarProvider>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden smDown>
              <Grid item xs={4}>
                <Grid container justify="flex-start">
                  <AppBarLeftMenu dropdownItems={leftDropdownItems} />
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
