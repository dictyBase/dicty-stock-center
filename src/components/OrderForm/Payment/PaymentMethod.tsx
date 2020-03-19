import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import useStyles from "../formStyles"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"

/**
 * PaymentMethod contains radio buttons and a text field for listing payment method information.
 */

const PaymentMethod = () => {
  const [purchaseOrderNum, setPurchaseOrderNum] = useState(false)
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <RequiredTextLabel title="Payment Account" />
      <Grid item xs={12} md={8}>
        <PaymentMethodRadioGroup setPurchaseOrderNum={setPurchaseOrderNum} />
        {purchaseOrderNum && (
          <TextField name="purchaseOrderNum" placeholder="PO Number" />
        )}
      </Grid>
    </Grid>
  )
}

export default PaymentMethod
