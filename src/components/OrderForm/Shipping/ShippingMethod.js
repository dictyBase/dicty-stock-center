// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"
import useStyles from "../formStyles"

type Props = {
  /** Function for handling radio button selection */
  handleChange: Function,
  /** Function to manually set Formik field values */
  setFieldValue: Function,
}

/**
 * ShippingMethod contains radio buttons and a text field for listing courier information.
 */

const ShippingMethod = (props: Props) => {
  const [shipAccountNum, setShipAccountNum] = useState(true)
  const [prepaidNotice, setPrepaidNotice] = useState(false)
  const classes = useStyles()
  const { handleChange, setFieldValue } = props

  const handleShipAccountChange = () => {
    setShipAccountNum(true)
    setPrepaidNotice(false)
  }

  const handlePrepaidLabelChange = () => {
    setShipAccountNum(false)
    setPrepaidNotice(true)
    setFieldValue("shippingAccountNumber", "sending prepaid shipping label")
  }

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
            onChange={handleShipAccountChange}
          />
          <FormControlLabel
            value="ups"
            control={<Radio />}
            label="UPS"
            onChange={handleShipAccountChange}
          />
          <FormControlLabel
            value="dhl"
            control={<Radio />}
            label="DHL"
            onChange={handleShipAccountChange}
          />
          <FormControlLabel
            value="prepaid"
            control={<Radio />}
            label="Send prepaid shipping label"
            onChange={handlePrepaidLabelChange}
          />
        </RadioGroup>
        {shipAccountNum && (
          <TextField
            type="text"
            name="shippingAccountNumber"
            placeholder="Shipping Account Number"
          />
        )}
        {prepaidNotice && (
          <div className={classes.panelBlue}>
            If using a prepaid shipping label, please send ASAP to{" "}
            <u>
              <a href="mailto:dictystocks@northwestern.edu" target="_top">
                dictystocks@northwestern.edu
              </a>
            </u>
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default ShippingMethod
