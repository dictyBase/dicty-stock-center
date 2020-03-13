import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import useStyles from "../formStyles"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"

type Props = {
  /** Function for handling radio button selection */
  handleChange: () => void
  /** Function to manually set Formik field values */
  setFieldValue: Function
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
        <PaymentMethodRadioGroup
          setPurchaseOrderNum={setPurchaseOrderNum}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
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
