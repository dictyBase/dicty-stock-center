// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Select from "@material-ui/core/Select"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "../TextField"
import countryList from "../countryList"
import useStyles from "../formStyles"

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Values from Formik */
  values: Object,
}

/**
 * AddressInformation contains text fields for entering a user address.
 */

const PaymentAddressInformation = (props: Props) => {
  const { values, setFieldValue } = props
  const classes = useStyles()

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Address:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerAddress1" />
      </Grid>
      <Grid item xs={3}>
        Address:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerAddress2" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> City:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerCity" />
      </Grid>
      <Grid item xs={3}>
        State/Province:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerState" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Zip Code:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerZip" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Country:
      </Grid>
      <Grid item xs={8} className={classes.selectBox}>
        <Select
          name="country"
          label="Country"
          fullWidth
          value={values.payerCountry}
          onChange={e => setFieldValue("payerCountry", e.target.value)}
          input={
            <OutlinedInput
              name="payerCountry"
              id="country"
              fullWidth
              labelWidth={0}
            />
          }>
          {countryList &&
            countryList.map(item => (
              <MenuItem key={countryList.indexOf(item)} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </Grid>
    </>
  )
}

export default PaymentAddressInformation
