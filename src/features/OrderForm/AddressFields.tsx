import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "./TextField"
import CountryDropdown from "./CountryDropdown"

const checkIfCountry = (name: string) =>
  name === "country" || name === "payerCountry"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(0, 1, 1, 1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

type Props = {
  /** Array of fields to display */
  fields: Array<{
    /** Label display for field (i.e. Country, Zip Code, etc) */
    field: string
    /** Internal name of field (i.e. firstName, payerFirstName, etc.) */
    name: string
    /** Denotes if field requires a value to advance */
    required: boolean
  }>
  /** Name of country */
  countryName: string
}

/**
 * AddressFields displays a list of address fields with corresponding labels.
 */
const AddressFields = ({ fields, countryName }: Props) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}>
      {fields.map((item, index) => (
        <React.Fragment key={index}>
          <Grid item xs={12} md={3}>
            {item.required && (
              <Typography component="span" color="error">
                *
              </Typography>
            )}{" "}
            {item.field}:
          </Grid>
          <Grid item xs={12} md={8}>
            {checkIfCountry(item.name) ? (
              <CountryDropdown name={countryName} />
            ) : (
              <TextField name={item.name} />
            )}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}

export { checkIfCountry }
export default AddressFields
