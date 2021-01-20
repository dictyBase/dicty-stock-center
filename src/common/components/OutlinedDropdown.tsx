import React from "react"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

type Props = {
  /** Function called when selecting dropdown option */
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  /** List of values to display in dropdown */
  dropdownValues: Array<number>
  /** Initial value for dropdown */
  inputValue: Number
  /** Input label */
  label: string
}

/**
 * OutlinedDropdown provides an outlined dropdown box that displays a
 * list of given values.
 */
const OutlinedDropdown = ({
  handleChange,
  dropdownValues,
  inputValue,
  label,
}: Props) => {
  const labelRef = React.useRef<HTMLLabelElement>(null)
  const labelWidth = labelRef.current ? labelRef.current.clientWidth : 0

  return (
    <FormControl variant="outlined">
      <InputLabel ref={labelRef} shrink id={`${label}-select-label`}>
        {label}
      </InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={inputValue}
        onChange={handleChange}
        input={
          <OutlinedInput
            notched
            name="quantity"
            id="outlined-input"
            margin="dense"
            labelWidth={labelWidth}
          />
        }>
        {dropdownValues.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default OutlinedDropdown
