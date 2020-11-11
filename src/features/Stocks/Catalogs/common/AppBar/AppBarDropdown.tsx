import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"

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
  dropdownValue: string
  handleChange: (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => void
}

/**
 * AppBarDropdown is a reusable dropdown menu component for the catalog appbars.
 */

const AppBarDropdown = ({
  dropdownItems,
  dropdownValue,
  handleChange,
}: Props) => {
  const classes = useStyles()

  return (
    <FormControl>
      <Select
        native
        value={dropdownValue}
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
