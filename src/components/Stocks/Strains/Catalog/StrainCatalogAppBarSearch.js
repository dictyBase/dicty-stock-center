// @flow
import React from "react"
import gql from "graphql-tag"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
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
    minWidth: 400,
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
    filter,
    setFilter,
  } = useStrainCatalogState()
  const classes = useStyles()

  const handleChange = event => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setQuery(GET_STRAINS_FILTER)
    setVariables({ cursor: 0, filter: `${filter}~${searchValue}` })
  }

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <Grid container alignItems="center">
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
          <FormControl>
            <Select
              native
              value={filter}
              onChange={handleFilterChange}
              input={
                <Input
                  disableUnderline
                  name="strain-catalog-search"
                  id="strain-search-filter"
                />
              }>
              <option value="id">Strain ID</option>
              <option value="label">Descriptor</option>
              <option value="summary">Summary</option>
            </Select>
          </FormControl>
        </Grid>
      </Paper>
    </form>
  )
}

export default StrainCatalogAppBarSearch
