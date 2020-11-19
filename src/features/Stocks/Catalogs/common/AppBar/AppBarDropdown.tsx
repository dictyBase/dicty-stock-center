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
  /** List of items to display in dropdown */
  dropdownItems: Array<{
    value: string
    name: string
  }>
  /** The currently selected dropdown value */
  dropdownValue: string
  /** Function to call on item select */
  handleChange: (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => void
  /** Name used to identify dropdown box */
  inputName: string
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

  return (
    <FormControl>
      <Select
        native
        value={dropdownValue}
        onChange={handleChange}
        input={
          <Input
            disableUnderline
            name={inputName}
            data-testid={inputName}
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
