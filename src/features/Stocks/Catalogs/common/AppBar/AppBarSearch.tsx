import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { TextField, IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ActiveFilters from "./ActiveFilters"
import Autocomplete from "@material-ui/lab/Autocomplete"

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

  const handleChange = (value: string) => {
    setSearchValue(value)
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
    state: { searchValue },
  } = useCatalogStore()
  const classes = useStyles()
  const { handleChange, handleSubmit } = useAppBarSearch()

  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <IconButton
        onClick={handleSubmit}
        role="search-button"
        className={classes.optionButton}>
        <FontAwesomeIcon icon={"search"} size="xs" />
      </IconButton>

      <ActiveFilters />

      <Autocomplete
        id="search-input-autocomplete"
        options={dropdownItems.map((item) => item.name)}
        value={searchValue}
        clearOnBlur={false}
        clearOnEscape={false}
        onChange={(_, value) => handleChange(value ? value : "")}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            inputProps={{
              ...params.inputProps,
              role: "search-input",
              id: "search-input",
            }}
            onChange={(event) => handleChange(event.target.value)}
            variant="outlined"
            className={classes.searchInput}
            placeholder="Search entire catalog..."
          />
        )}
      />
    </form>
  )
}

export default AppBarSearch
