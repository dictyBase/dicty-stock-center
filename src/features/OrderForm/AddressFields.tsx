import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "./TextField"
import CountryDropdown from "./CountryDropdown"
import useStyles from "./formStyles"

const checkIfCountry = (name: string) =>
  name === "country" || name === "payerCountry"

type Props = {
  /** Array of fields to display */
  fields: Array<{
    field: string
    name: string
    required: boolean
  }>
  countryName: string
}

/**
 * AddressFields contains text fields for entering a user address.
 */

const AddressFields = ({ fields, countryName }: Props) => {
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
            {checkIfCountry(item.name) ? (
              <CountryDropdown name={countryName} />
            ) : (
              <TextField name={item.name} />
            )}
          </Grid>
        </Fragment>
      ))}
    </Grid>
  )
}

export { checkIfCountry }
export default AddressFields
