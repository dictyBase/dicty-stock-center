// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarDropdown from "./AppBarDropdown"
import { useAppBarState } from "./AppBarContext"
import { appBarTypes } from "constants/appBar"
import { catalogTypes } from "constants/catalogs"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    minWidth: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  separator: {
    borderLeftColor: "#bfbfbf",
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    display: "inline-block",
    height: "30px",
    verticalAlign: "middle",
    paddingRight: "4px",
  },
}))

type Props = {
  query: string,
  dropdownItems: Array<{
    value: string,
    name: string,
  }>,
  catalogDispatch: Function,
}

/**
 * AppBarSearch is the search box found on a stock catalog page.
 */

const AppBarSearch = ({ query, dropdownItems, catalogDispatch }: Props) => {
  const [{ searchValue, filter }, dispatch] = useAppBarState()
  const classes = useStyles()

  const resetQueryVariables = () =>
    catalogDispatch({
      type: catalogTypes.SET_QUERY_VARIABLES,
      payload: { cursor: 0, filter: `${filter}~${searchValue}` },
    })

  const resetQuery = () =>
    catalogDispatch({
      type: catalogTypes.SET_QUERY,
      payload: query,
    })

  const handleChange = event => {
    dispatch({
      type: appBarTypes.SET_SEARCH_VALUE,
      payload: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    resetQuery()
    resetQueryVariables()
  }

  const clearSearch = () => {
    dispatch({
      type: appBarTypes.SET_SEARCH_VALUE,
      payload: "",
    })
    resetQuery()
    resetQueryVariables()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <Grid container alignItems="center">
          <IconButton
            className={classes.iconButton}
            aria-label="Catalog search icon"
            title="Search catalog">
            <FontAwesomeIcon icon="search" size="sm" />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            value={searchValue}
          />
          <IconButton
            className={classes.iconButton}
            title="Clear search box"
            aria-label="clear search box"
            onClick={clearSearch}>
            <FontAwesomeIcon icon="times" size="sm" />
          </IconButton>
          <div className={classes.separator} />
          <AppBarDropdown dropdownItems={dropdownItems} />
        </Grid>
      </Paper>
    </form>
  )
}

export default AppBarSearch
