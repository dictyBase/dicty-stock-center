import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { InputAdornment, TextField, IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"
import ActiveFilters from "./ActiveFilters"

const useStyles = makeStyles((theme) => ({
  searchForm: {
    minHeight: "inherit",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "0px 10px",
  },
  searchInput: {
    "& > div.MuiInputBase-root fieldset": {
      borderRadius: "0px",
      border: "0px solid transparent!important",
    },
  },
  optionButton: {
    width: "42px",
    height: "42px",
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
  const { setQueryVariables, setSearchValue, setSearchBoxDropdownValue } =
    useCatalogDispatch()
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
    if (searchBoxDropdownValue === "id" && getDetailsURL(searchValue) !== "") {
      history.push(getDetailsURL(searchValue))
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
    state: { searchValue, activeFilters },
    dispatch,
  } = useCatalogStore()
  const classes = useStyles()
  const { handleChange, handleSubmit, clearSearch } = useAppBarSearch()

  const clearFiltersFromInput = (e: React.KeyboardEvent<any>) => {
    // Remove filters if user hits backspace
    // while both searchValue, and activeFilters are empty
    if (
      searchValue.length === 0 &&
      activeFilters.length > 0 &&
      e.key === "Backspace"
    ) {
      const newActiveFilters = activeFilters
      newActiveFilters.pop()

      dispatch({
        type: CatalogActionType.SET_ACTIVE_FILTERS,
        payload: newActiveFilters,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <IconButton
        onClick={handleSubmit}
        role="search-button"
        className={classes.optionButton}>
        <FontAwesomeIcon icon={"search"} size="xs" />
      </IconButton>

      <ActiveFilters />

      <TextField
        fullWidth
        inputProps={{ role: "search-input", id: "search-input" }}
        onChange={handleChange}
        onKeyDown={clearFiltersFromInput}
        value={searchValue}
        variant="outlined"
        className={classes.searchInput}
        placeholder="Search entire catalog..."
        autoFocus={true}
      />

      <IconButton
        onClick={clearSearch}
        role="clear-search-button"
        style={{
          visibility: searchValue.length === 0 ? "hidden" : "visible",
        }}
        className={classes.optionButton}>
        <FontAwesomeIcon icon={"times"} size="xs" />
      </IconButton>
    </form>
  )
}

export default AppBarSearch
