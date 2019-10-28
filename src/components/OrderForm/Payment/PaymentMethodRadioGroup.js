// @flow
import React from "react"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

type Props = {
  /** Function for handling radio button selection */
  handleChange: Function,
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  setPurchaseOrderNum: Function,
}

/**
 * PaymentMethodRadioGroup contains radio buttons for payment methods.
 */

const PaymentMethodRadioGroup = ({
  handleChange,
  setFieldValue,
  setPurchaseOrderNum,
}: Props) => {
  const handlePaymentChange = () => {
    setPurchaseOrderNum(false)
    setFieldValue("purchaseOrderNum", "N/A")
  }

  return (
    <RadioGroup
      aria-label="Payment Method"
      name="PaymentMethodRadioGroup"
      onChange={handleChange}
      row>
      <FormControlLabel
        value="credit"
        control={<Radio />}
        label="Credit Card"
        onChange={handlePaymentChange}
      />
      <FormControlLabel
        value="wire"
        control={<Radio />}
        label="Wire transfer"
        onChange={handlePaymentChange}
      />
      <FormControlLabel
        value="purchaseOrder"
        control={<Radio />}
        label="Purchase Order (PO)"
        onChange={() => setPurchaseOrderNum(true)}
      />
    </RadioGroup>
  )
}

export default PaymentMethodRadioGroup
