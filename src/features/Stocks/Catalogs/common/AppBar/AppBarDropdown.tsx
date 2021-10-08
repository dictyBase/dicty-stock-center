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
    <FormControl className={classes.containerize}>
      <Select
        value={dropdownValue}
        onChange={handleChange}
        input={
          <Input disableUnderline name={inputName} data-testid={inputName} />
        }
        className={`${classes.containerize} ${classes.containedSelect}`}>
        {dropdownItems.map((item, index) => (
          <MenuItem value={item.value} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default AppBarDropdown
