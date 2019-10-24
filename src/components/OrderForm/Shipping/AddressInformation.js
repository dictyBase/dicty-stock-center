// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import CountryDropdown from "../CountryDropdown"
import useStyles from "../formStyles"

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Values from Formik */
  values: Object,
}

const fields = [
  {
    name: "address1",
    field: "Address",
    required: true,
  },
  {
    name: "address2",
    field: "Address",
    required: false,
  },
  {
    name: "city",
    field: "City",
    required: true,
  },
  {
    name: "state",
    field: "State/Province",
    required: false,
  },
  {
    name: "zip",
    field: "Zip Code",
    required: true,
  },
]

/**
 * AddressInformation contains text fields for entering a user address.
 */

const AddressInformation = ({ values, setFieldValue }: Props) => {
  const classes = useStyles()

  return (
    <>
      {fields.map((item, index) => (
        <>
          <Grid item xs={12} md={3}>
            {item.required && <span className={classes.requiredText}>*</span>}{" "}
            {item.field}:
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField type="text" name={item.name} />
          </Grid>
        </>
      ))}
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> Country:
      </Grid>
      <Grid item xs={12} md={8} className={classes.selectBox}>
        <CountryDropdown
          value={values.country}
          name="country"
          setFieldValue={setFieldValue}
        />
      </Grid>
    </>
  )
}

export default AddressInformation
