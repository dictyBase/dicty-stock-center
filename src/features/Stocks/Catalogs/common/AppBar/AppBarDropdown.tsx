import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import { MenuItem } from "@material-ui/core"

const useStyles = makeStyles({
  containerize: {
    minHeight: "inherit",
    width: "100%",
  },
  containedSelect: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "inherit",
    "& > div:focus": {
      backgroundColor: "white",
    },
    "& > div": {
      minHeight: "inherit",
      display: "flex",
      alignItems: "center",
      padding: "0px 15px",
    },
  },
})

type Props = {
  /** List of items to display in dropdown */
  dropdownItems: Array<{
    value: string
    name: string
  }>
  /** The currently selected dropdown value */
  dropdownValue: string
  /** Function to call on item select */
  handleChange: (name: string, value: any) => void
  /** Name used to identify dropdown box */
  inputName: string
}

/**
 * Maps the value from the filter query to the corresponding index value of the dropdown
 * @param value value from the filter query. This value could be "regular", "gwdi", etc.
 * @returns Index of the corresponding menu item
 */
const dropdownValueToIndexMap = (value: string): number => {
  let index = 2
  switch (value.toLowerCase()) {
    case "regular":
      index = 0
      break
    case "gwdi":
      index = 1
      break
    case "bacterial":
      index = 3
      break
  }
  return index
}

/**
 * AppBarDropdown is a reusable dropdown menu component for the catalog appbars.
 */

const AppBarDropdown = ({
  dropdownItems,
  dropdownValue,
  handleChange,
  inputName,
}: Props) => {
  const classes = useStyles()

  const mappedDropdownValue = dropdownValueToIndexMap(dropdownValue)

  return (
    <FormControl className={classes.containerize}>
      <Select
        value={mappedDropdownValue}
        onChange={(event: any) => {
          const val = dropdownItems[event.target.value]
          handleChange(val.name, val.value)
        }}
        input={
          <Input disableUnderline name={inputName} data-testid={inputName} />
        }
        className={`${classes.containerize} ${classes.containedSelect}`}>
        {dropdownItems.map((item, index) => (
          <MenuItem value={index} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default AppBarDropdown
export { dropdownValueToIndexMap }
