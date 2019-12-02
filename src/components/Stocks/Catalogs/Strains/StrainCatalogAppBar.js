// @flow
import React from "react"
import gql from "graphql-tag"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import AppBarLeftMenu from "components/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "components/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { AppBarProvider } from "components/Stocks/Catalogs/common/AppBar/AppBarContext"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

const GET_STRAINS_FILTER = gql`
  query StrainListFilter($cursor: Int!, $filter: String!) {
    listStrains(input: { cursor: $cursor, limit: 10, filter: $filter }) {
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

/** Need to update values */

const leftDropdownItems = [
  {
    value: "all",
    name: "All Strains",
  },
  {
    value: "gwdi",
    name: "GWDI Strains",
  },
  {
    value: "in_stock===true",
    name: "Available Strains",
  },
  {
    value: "in_stock===false",
    name: "Unavailable Strains",
  },
]

const rightDropdownItems = [
  {
    value: "id",
    name: "ID",
  },
  {
    value: "label",
    name: "Descriptor",
  },
  {
    value: "summary",
    name: "Summary",
  },
]

/**
 * StrainCatalogAppBar is the main display component for the app bar
 * at the top of the catalog page.
 */

const StrainCatalogAppBar = () => {
  const [, dispatch] = useCatalogState()
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
                  query={GET_STRAINS_FILTER}
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

export { GET_STRAINS_FILTER }
export default StrainCatalogAppBar
