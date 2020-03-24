import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import useStyles from "../formStyles"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"

/**
 * ShippingMethod contains radio buttons and a text field for listing courier information.
 */

const ShippingMethod = () => {
  const [shipAccountNum, setShipAccountNum] = useState(true)
  const [prepaidNotice, setPrepaidNotice] = useState(false)
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <RequiredTextLabel title="Shipping Account" />
      <Grid item xs={12} md={8}>
        <ShippingMethodRadioGroup
          setShipAccountNum={setShipAccountNum}
          setPrepaidNotice={setPrepaidNotice}
        />
        {shipAccountNum && (
          <TextField
            name="shippingAccountNumber"
            placeholder="Shipping Account Number"
          />
        )}
        {prepaidNotice && <ShippingMethodPrepaidNotice />}
        <p>
          <em>Note: credit card is not allowed for shipment</em>
        </p>
      </Grid>
    </Grid>
  )
}

export default ShippingMethod
