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
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
}))

/**
 * PlasmidCatalogAppBarSearch contains the search box on the catalog
 * page.
 */

const PlasmidCatalogAppBarSearch = () => {
  const {
    setQuery,
    setVariables,
    searchValue,
    setSearchValue,
    filter,
    setFilter,
  }: {
    setQuery: Function,
    setVariables: Function,
    searchValue: string,
    setSearchValue: Function,
    filter: string,
    setFilter: Function,
  } = usePlasmidCatalogState()
  const classes = useStyles()

  const handleChange = event => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setQuery(GET_PLASMIDS_FILTER)
    setVariables({ cursor: 0, filter: `${filter}~${searchValue}` })
  }

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  const clearSearch = () => {
    setSearchValue("")
    setQuery(GET_PLASMIDS_FILTER)
    setVariables({ cursor: 0, filter: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <Grid container alignItems="center">
          <IconButton
            className={classes.iconButton}
            aria-label="Plasmid catalog search icon"
            title="Search plasmid catalog">
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
          <FormControl>
            <Select
              native
              value={filter}
              onChange={handleFilterChange}
              input={
                <Input
                  disableUnderline
                  name="plasmid-catalog-search"
                  id="plasmid-search-filter"
                  classes={{
                    input: classes.select,
                  }}
                />
              }>
              <option value="plasmid_name">Name</option>
              <option value="summary">Summary</option>
              <option value="id">Plasmid ID</option>
            </Select>
          </FormControl>
        </Grid>
      </Paper>
    </form>
  )
}

export default PlasmidCatalogAppBarSearch
