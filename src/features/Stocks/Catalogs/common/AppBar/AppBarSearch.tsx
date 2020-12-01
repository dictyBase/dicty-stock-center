import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarDropdown from "./AppBarDropdown"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"

const useStyles = makeStyles((theme) => ({
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

/** getDetailsURL uses regex to check if a stock ID has been entered into the
 * catalog search box. It returns the URL to redirect to.
 */
const getDetailsURL = (id: string) => {
  const strainID = /DBS\d{7}/
  const plasmidID = /DBP\d{7}/

  if (strainID.test(id)) {
    return `/strains/${id}`
  }

  if (plasmidID.test(id)) {
    return `/plasmids/${id}`
  }

  return ""
}

const useAppBarSearch = () => {
  const {
    state: { searchValue, searchBoxDropdownValue, leftDropdownValue },
  } = useCatalogStore()
  const {
    setQueryVariables,
    setSearchValue,
    setSearchBoxDropdownValue,
  } = useCatalogDispatch()
  const history = useHistory()

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    setSearchValue(event.target.value)
  }

  const handleDropdownChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    setSearchBoxDropdownValue(event.target.value)
  }

  const clearSearch = () => {
    setSearchValue("")
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent,
  ) => {
    event.preventDefault()
    setQueryVariables({
      cursor: 0,
      limit: 10,
      filter: `${searchBoxDropdownValue}=~${searchValue}`,
    })
    if (searchBoxDropdownValue === "id") {
      const idCheck = getDetailsURL(searchValue)
      if (idCheck !== "") {
        history.push(idCheck)
      }
    } else {
      history.push(
        `?filter=${leftDropdownValue}&${searchBoxDropdownValue}=${searchValue}`,
      )
    }
  }

  return {
    handleChange,
    handleDropdownChange,
    handleSubmit,
    clearSearch,
  }
}

type Props = {
  /** List of dropdown items next to search box */
  dropdownItems: Array<{
    value: string
    name: string
  }>
}

/**
 * AppBarSearch is the search box found on a stock catalog page.
 */

const AppBarSearch = ({ dropdownItems }: Props) => {
  const {
    state: { searchValue, searchBoxDropdownValue, leftDropdownValue },
  } = useCatalogStore()
  const classes = useStyles()
  const {
    handleChange,
    handleDropdownChange,
    handleSubmit,
    clearSearch,
  } = useAppBarSearch()

  // remove this when filtering is available on the backend
  if (leftDropdownValue !== "all") {
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper>
        <Grid container alignItems="center">
          <IconButton
            className={classes.iconButton}
            aria-label="Catalog search icon"
            title="Search catalog"
            onClick={handleSubmit}>
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
          <AppBarDropdown
            dropdownItems={dropdownItems}
            handleChange={handleDropdownChange}
            dropdownValue={searchBoxDropdownValue}
            inputName="catalog-search-filter"
          />
        </Grid>
      </Paper>
    </form>
  )
}

export default AppBarSearch
