// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import useStyles from "../formStyles"

/**
 * PaymentContactInformation contains a text field for entering a phone number.
 */

const PaymentContactInformation = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Phone Number:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerPhone" />
      </Grid>
    </>
  )
}

export default PaymentContactInformation
