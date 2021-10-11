import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { InputAdornment, TextField, Chip, Box } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"

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
  chipHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "& > div": {
      marginRight: "3px",
    },
    "& > div:last-child": {
      marginRight: "0",
    },
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
    state: { searchValue, searchBoxDropdownValue, activeFilters },
    dispatch,
  } = useCatalogStore()
  const classes = useStyles()
  const { handleChange, handleDropdownChange, handleSubmit, clearSearch } =
    useAppBarSearch()

  const removeFilter = (index: number) => {
    if (index >= activeFilters.length) return
    dispatch({
      type: CatalogActionType.SET_ACTIVE_FILTERS,
      payload: activeFilters.filter((f, i) => i !== index),
    })
  }

  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <Box className={classes.chipHolder}>
        {activeFilters?.map((val, i) => (
          <Chip
            label={val}
            onDelete={() => removeFilter(i)}
            key={`chip${i}${val}`}
            size="small"
          />
        ))}
      </Box>

      <TextField
        fullWidth
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        value={searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={"search"} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        className={classes.searchInput}
        placeholder="Search entire catalog..."
        role="search-textbox"
      />
      {/* <IconButton
            className={classes.iconButton}
            title="Clear search box"
            aria-label="clear search box"
            onClick={clearSearch}>
            <FontAwesomeIcon icon="times" size="sm" />
          </IconButton> */}
    </form>
  )
}

export default AppBarSearch
