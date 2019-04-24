// @flow
import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Function for handling radio button selection */
  handleChange: Function,
}

/**
 * ShippingMethod contains radio buttons and a text field for listing courier information.
 */

const ShippingMethod = (props: Props) => {
  const [shipAccountNum, setShipAccountNum] = useState(true)
  const { classes, handleChange } = props

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Shipping Account:
      </Grid>
      <Grid item xs={8}>
        <RadioGroup
          aria-label="Shipping Account"
          name="shippingAccount"
          onChange={handleChange}
          row>
          <FormControlLabel
            value="fedex"
            control={<Radio />}
            label="FedEx"
            onChange={() => setShipAccountNum(true)}
          />
          <FormControlLabel
            value="ups"
            control={<Radio />}
            label="UPS"
            onChange={() => setShipAccountNum(true)}
          />
          <FormControlLabel
            value="dhl"
            control={<Radio />}
            label="DHL"
            onChange={() => setShipAccountNum(true)}
          />
          <FormControlLabel
            value="prepaid"
            control={<Radio />}
            label="Send prepaid shipping label"
            onChange={() => setShipAccountNum(false)}
          />
        </RadioGroup>
        {shipAccountNum && (
          <TextField
            type="text"
            name="shippingAccountNumber"
            placeholder="Shipping Account Number"
          />
        )}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ShippingMethod)
