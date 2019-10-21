// @flow
import React from "react"
import gql from "graphql-tag"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import AppBarLeftMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarLeftMenu"
import AppBarSearch from "components/Stocks/CatalogPageItems/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarRightMenu"
import { AppBarProvider } from "components/Stocks/CatalogPageItems/AppBar/AppBarContext"
import { useStrainCatalogState } from "./StrainCatalogContext"
import useStyles from "./strainCatalogStyles"

export const GET_STRAINS_FILTER = gql`
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

const leftDropdownItems = [
  {
    name: "All Strains",
  },
  {
    name: "GWDI Strains",
  },
  {
    name: "Available Strains",
  },
  {
    name: "Unavailable Strains",
  },
]

const rightDropdownItems = [
  {
    value: "id",
    name: "Strain ID",
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
  const { setQuery, setQueryVariables } = useStrainCatalogState()
  const classes = useStyles()

  return (
    <AppBarProvider>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="flex-start">
            <AppBarLeftMenu dropdownItems={leftDropdownItems} />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <AppBarSearch
                query={GET_STRAINS_FILTER}
                dropdownItems={rightDropdownItems}
                setQuery={setQuery}
                setQueryVariables={setQueryVariables}
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <AppBarRightMenu />
          </Grid>
        </Toolbar>
      </AppBar>
    </AppBarProvider>
  )
}

export default StrainCatalogAppBar
