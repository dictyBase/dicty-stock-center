import React from "react"
import { useFormikContext } from "formik"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "./TextField"
import countryList from "./utils/countryList"

// ISO 3166-1 alpha-2 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
const countryToFlag = (isoCode: string) => {
  // verify fromCodePoint is a valid method for browser
  if (typeof String.fromCodePoint !== "undefined") {
    return isoCode.replace(/./g, (char: string) =>
      String.fromCodePoint(char.charCodeAt(0) + 127397),
    )
  }
  return isoCode
}

type CountryValue = {
  /** Two-digit country code */
  code: string
  /** Name of country */
  label: string
}

type Props = {
  /** Field name (country or payerCountry) */
  name: string
}

/**
 * CountryDropdown is the reusable dropdown component for selecting a country.
 */

const CountryDropdown = ({ name }: Props) => {
  const { values, setFieldValue } = useFormikContext<any>()

  const handleChange = (_: object, value: CountryValue | null) => {
    if (value !== null) {
      setFieldValue(name, value.label)
    }
  }

  return (
    <Autocomplete
      id="country"
      options={countryList}
      getOptionLabel={option => option.label}
      onChange={handleChange}
      inputValue={values[name]}
      renderOption={option => (
        <>
          <span>{countryToFlag(option.code)}</span>&nbsp;
          {option.label}
        </>
      )}
      renderInput={props => <TextField {...props} name={name} />}
    />
  )
}

export default CountryDropdown
