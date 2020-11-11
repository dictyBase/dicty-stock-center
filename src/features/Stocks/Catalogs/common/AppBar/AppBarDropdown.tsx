import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import {
  useCatalogStore,
  useCatalogDispatch,
} from "features/Stocks/Catalogs/common/CatalogContext"

const useStyles = makeStyles({
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
})

type Props = {
  dropdownItems: Array<{
    value: string
    name: string
  }>
}

/**
 * AppBarDropdown is a reusable dropdown menu component for the catalog appbars.
 */

const AppBarDropdown = ({ dropdownItems }: Props) => {
  const {
    state: { searchBoxDropdownValue },
  } = useCatalogStore()
  const { setSearchBoxDropdownValue } = useCatalogDispatch()
  const classes = useStyles()

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    setSearchBoxDropdownValue(event.target.value)
  }

  return (
    <FormControl>
      <Select
        native
        value={searchBoxDropdownValue}
        onChange={handleChange}
        input={
          <Input
            disableUnderline
            name="catalog-search"
            id="search-filter"
            classes={{
              input: classes.select,
            }}
          />
        }>
        {dropdownItems.map((item, index) => (
          <option value={item.value} key={index}>
            {item.name}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default AppBarDropdown
