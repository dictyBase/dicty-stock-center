// @flow
import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import useStyles from "../formStyles"

type Props = {
  /** Function for handling radio button selection */
  handleChange: Function,
  /** Function to manually set Formik field values */
  setFieldValue: Function,
}

/**
 * PaymentMethod contains radio buttons and a text field for listing payment method information.
 */

const PaymentMethod = ({ handleChange, setFieldValue }: Props) => {
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
        <RadioGroup
          aria-label="Payment Method"
          name="paymentMethod"
          onChange={handleChange}
          row>
          <FormControlLabel
            value="credit"
            control={<Radio />}
            label="Credit Card"
            onChange={() => {
              setPurchaseOrderNum(false)
              setFieldValue("purchaseOrderNum", "N/A - credit card")
            }}
          />
          <FormControlLabel
            value="wire"
            control={<Radio />}
            label="Wire transfer"
            onChange={() => {
              setPurchaseOrderNum(false)
              setFieldValue("purchaseOrderNum", "N/A - wire transfer")
            }}
          />
          <FormControlLabel
            value="purchaseOrder"
            control={<Radio />}
            label="Purchase Order (PO)"
            onChange={() => setPurchaseOrderNum(true)}
          />
        </RadioGroup>
        {purchaseOrderNum && (
          <TextField
            type="text"
            name="purchaseOrderNum"
            placeholder="PO Number"
          />
        )}
      </Grid>
    </Grid>
  )
}

export default PaymentMethod
