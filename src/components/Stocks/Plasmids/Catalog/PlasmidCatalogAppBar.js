// @flow
import React from "react"
import gql from "graphql-tag"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import AppBarLeftMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarLeftMenu"
import AppBarSearch from "components/Stocks/CatalogPageItems/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarRightMenu"
import { AppBarProvider } from "components/Stocks/CatalogPageItems/AppBar/AppBarContext"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"

export const GET_PLASMIDS_FILTER = gql`
  query PlasmidListFilter($cursor: Int!, $filter: String!) {
    listPlasmids(input: { cursor: $cursor, limit: 10, filter: $filter }) {
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

const leftDropdownItems = [
  {
    name: "All Plasmids",
  },
  {
    name: "Available Plasmids",
  },
  {
    name: "Unavailable Plasmids",
  },
]

const rightDropdownItems = [
  {
    value: "id",
    name: "Plasmid ID",
  },
  {
    value: "plasmid_name",
    name: "Name",
  },
  {
    value: "summary",
    name: "Summary",
  },
]

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
  const { setQuery, setQueryVariables } = usePlasmidCatalogState()
  const classes = useStyles()

  return (
    <AppBarProvider>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="flex-start">
            <AppBarLeftMenu dropdownItems={leftDropdownItems} />
          </Grid>
          <Grid container justify="center">
            <AppBarSearch
              query={GET_PLASMIDS_FILTER}
              dropdownItems={rightDropdownItems}
              setQuery={setQuery}
              setQueryVariables={setQueryVariables}
            />
          </Grid>
          <Grid container justify="flex-end">
            <AppBarRightMenu />
          </Grid>
        </Toolbar>
      </AppBar>
    </AppBarProvider>
  )
}

export default PlasmidCatalogAppBar
