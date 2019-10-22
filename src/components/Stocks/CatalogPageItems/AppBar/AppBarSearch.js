// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarSearchFilter from "./AppBarSearchFilter"
import { useAppBarState } from "./AppBarContext"

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
  setQuery: Function,
  setQueryVariables: Function,
}

type AppBarState = {
  searchValue: string,
  setSearchValue: Function,
  filter: string,
}

/**
 * AppBarSearch is the search box found on a stock catalog page.
 */

const AppBarSearch = ({
  query,
  dropdownItems,
  setQuery,
  setQueryVariables,
}: Props) => {
  const { searchValue, setSearchValue, filter }: AppBarState = useAppBarState()
  const classes = useStyles()

  const handleChange = event => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setQuery(query)
    setQueryVariables({ cursor: 0, filter: `${filter}~${searchValue}` })
  }

  const clearSearch = () => {
    setSearchValue("")
    setQuery(query)
    setQueryVariables({ cursor: 0, filter: `${filter}~${searchValue}` })
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
          <AppBarSearchFilter dropdownItems={dropdownItems} />
        </Grid>
      </Paper>
    </form>
  )
}

export default AppBarSearch
