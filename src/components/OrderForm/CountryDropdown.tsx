import React from "react"
import Select from "@material-ui/core/Select"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem"
import countryList from "./utils/countryList"

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function
  /** Value for country select */
  value: string
  /** Name to use as value */
  name: string
}

/**
 * CountryDropdown is the reusable dropdown component for selecting a country.
 */

const CountryDropdown = ({ value, name, setFieldValue }: Props) => (
  <Select
    name={name}
    label="Country"
    fullWidth
    value={value}
    onChange={e => setFieldValue(name, e.target.value)}
    input={<OutlinedInput name={name} id="country" fullWidth labelWidth={0} />}>
    {countryList &&
      countryList.map(item => (
        <MenuItem key={countryList.indexOf(item)} value={item}>
          {item}
        </MenuItem>
      ))}
  </Select>
)

export default CountryDropdown
