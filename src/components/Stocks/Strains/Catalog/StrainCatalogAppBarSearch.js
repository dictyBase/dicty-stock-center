// @flow
import React from "react"
import gql from "graphql-tag"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStrainCatalogState } from "./StrainCatalogContext"

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

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}))

/**
 * StrainCatalogAppBarSearch contains the search box on the catalog
 * page.
 */

const StrainCatalogAppBarSearch = () => {
  const {
    setQuery,
    setVariables,
    searchValue,
    setSearchValue,
  } = useStrainCatalogState()
  const classes = useStyles()

  const handleChange = event => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setQuery(GET_STRAINS_FILTER)
    setVariables({ cursor: 0, filter: `id~${searchValue}` })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <FontAwesomeIcon icon="search" />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
          value={searchValue}
        />
      </Paper>
    </form>
  )
}

export default StrainCatalogAppBarSearch
