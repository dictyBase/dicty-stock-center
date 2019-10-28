// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import useStyles from "../formStyles"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"

const carriers = [
  {
    value: "fedex",
    label: "FedEx",
  },
  {
    value: "ups",
    label: "UPS",
  },
  {
    value: "dhl",
    label: "DHL",
  },
]

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
      <RequiredTextLabel title="Shipping Account" />
      <Grid item xs={12} md={8}>
        <RadioGroup
          aria-label="Shipping Account"
          name="shippingAccount"
          onChange={handleChange}
          row>
          {carriers.map(item => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
              onChange={handleShipAccountChange}
            />
          ))}
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
        {prepaidNotice && <ShippingMethodPrepaidNotice />}
      </Grid>
    </Grid>
  )
}

export default ShippingMethod
