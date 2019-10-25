// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "./TextField"
import CountryDropdown from "./CountryDropdown"
import RequiredTextLabel from "./RequiredTextLabel"
import useStyles from "./formStyles"

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Array of fields to display */
  fields: Array<{
    field: string,
    name: string,
    required: boolean,
  }>,
  countryValue: string,
  countryName: string,
}

/**
 * AddressFields contains text fields for entering a user address.
 */

const AddressFields = ({
  fields,
  countryValue,
  countryName,
  setFieldValue,
}: Props) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      {fields.map((item, index) => (
        <Fragment key={index}>
          <Grid item xs={12} md={3}>
            {item.required && <span className={classes.requiredText}>*</span>}{" "}
            {item.field}:
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField type="text" name={item.name} />
          </Grid>
        </Fragment>
      ))}
      <RequiredTextLabel title="Country" />
      <Grid item xs={12} md={8} className={classes.selectBox}>
        <CountryDropdown
          value={countryValue}
          name={countryName}
          setFieldValue={setFieldValue}
        />
      </Grid>
    </Grid>
  )
}

export default AddressFields
