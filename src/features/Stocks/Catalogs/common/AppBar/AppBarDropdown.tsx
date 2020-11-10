import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import { useAppBarStore, AppBarActionType } from "./AppBarContext"

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
    dispatch,
  } = useAppBarStore()
  const classes = useStyles()

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    dispatch({
      type: AppBarActionType.SET_SEARCHBOX_DROPDOWN_VALUE,
      payload: event.target.value,
    })
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
