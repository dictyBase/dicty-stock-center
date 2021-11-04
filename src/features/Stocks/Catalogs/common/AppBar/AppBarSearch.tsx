import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { TextField, IconButton, Chip } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ActiveFilters from "./ActiveFilters"
import Autocomplete, {
  AutocompleteGetTagProps,
} from "@material-ui/lab/Autocomplete"
import { updateSearchQueries } from "../../Strains/StrainCatalogContainer"
import DeleteIcon from "@material-ui/icons/Cancel"

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

type DropDown = { name: string; value: string }

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

  const removeFilter = () => {
    history.push(
      updateSearchQueries("available", searchBoxDropdownValue, searchValue),
    )
  }

  const handleDropdownChange = ({ value }: DropDown) => {
    setSearchBoxDropdownValue(value)
  }

  const updateDropdown = ({ value }: DropDown) => {
    if (value === "none") {
      history.push(`?filter=${leftDropdownValue}`)
      setSearchBoxDropdownValue("none")
      setSearchValue("")
      return
    }
    history.push(`?filter=${leftDropdownValue}&field=${value}`)
  }

  const handleSubmit = (event: React.FormEvent | undefined, value: string) => {
    event?.preventDefault()
    setSearchValue(value)

    setQueryVariables({
      cursor: 0,
      limit: 10,
      filter: `${searchBoxDropdownValue}=~${value}`,
    })
    if (searchBoxDropdownValue === "id" && getDetailsURL(value) !== "") {
      history.push(getDetailsURL(value))
    } else {
      history.push(
        updateSearchQueries(leftDropdownValue, searchBoxDropdownValue, value),
      )
    }
  }

  return {
    handleChange,
    removeFilter,
    handleDropdownChange,
    handleSubmit,
    updateDropdown,
  }
}

type Props = {
  /** List of dropdown items next to search box */
  dropdownItems: Array<DropDown>
}

/**
 * AppBarSearch is the search box found on a stock catalog page.
 */
const AppBarSearch = ({ dropdownItems }: Props) => {
  const {
    state: { searchValue, activeFilters, searchBoxDropdownValue },
  } = useCatalogStore()
  const classes = useStyles()
  const { handleChange, handleSubmit, removeFilter, updateDropdown } =
    useAppBarSearch()

  // Get dropdown item from searchBoxDropdownValue
  const dropdownItem = dropdownItems.find(
    (option) => option.value === searchBoxDropdownValue,
  )
  const defaultItem =
    searchValue === "none" || !dropdownItem ? [] : [dropdownItem]
  const [value, setValue] = React.useState<DropDown[]>([])
  const [searchInput, setSearchInput] = React.useState<string>("")

  React.useEffect(() => {
    setValue(defaultItem)
  }, [searchBoxDropdownValue])

  const renderTags = (
    value: DropDown[],
    getTagProps: AutocompleteGetTagProps,
  ) => {
    return value.map((option, index) => (
      <Chip
        label={
          searchValue.trim() === ""
            ? option.name
            : `${option.name} : ${searchValue}`
        }
        {...getTagProps({ index })}
        size={"small"}
        variant="outlined"
        onDelete={() => {
          handleChange("")
          updateDropdown({ name: "none", value: "none" })
        }}
        deleteIcon={
          <DeleteIcon
            role="remove-field"
            aria-hidden="false"
            focusable="true"
          />
        }
      />
    ))
  }

  const onAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    newValue: (string | DropDown)[],
  ) => {
    const last = newValue.pop()
    if (typeof last === "string") return
    setValue(last ? [last] : [])
    if (last) {
      updateDropdown(last)
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, searchInput)}
      className={classes.searchForm}>
      <IconButton
        role="search-button"
        className={classes.optionButton}
        type="submit"
        name="submit">
        <FontAwesomeIcon icon={"search"} size="xs" />
      </IconButton>

      <ActiveFilters filters={activeFilters} removeFilter={removeFilter} />

      <Autocomplete
        freeSolo
        multiple
        disableClearable
        limitTags={1}
        id="fixed-tags-demo"
        value={value}
        onChange={onAutocompleteChange}
        options={dropdownItems}
        getOptionLabel={(option) => option.name}
        renderTags={renderTags}
        clearOnBlur={false}
        clearOnEscape={false}
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
            variant="outlined"
            className={classes.searchInput}
            placeholder="Search entire catalog..."
            name="search"
            id="search"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(undefined, searchInput)
              }
            }}
          />
        )}
      />
    </form>
  )
}

export default AppBarSearch
