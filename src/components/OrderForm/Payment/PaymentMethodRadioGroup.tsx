import React from "react"
import { useFormikContext } from "formik"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

type Props = {
  setPurchaseOrderNum: Function
}

/**
 * PaymentMethodRadioGroup contains radio buttons for payment methods.
 */

const PaymentMethodRadioGroup = ({ setPurchaseOrderNum }: Props) => {
  const { values, setFieldValue, handleChange } = useFormikContext<any>()

  const handlePaymentChange = () => {
    setPurchaseOrderNum(false)
    setFieldValue("purchaseOrderNum", "N/A")
  }

  const handlePurchaseOrderChange = () => {
    setPurchaseOrderNum(true)
    setFieldValue("purchaseOrderNum", "")
  }

  return (
    <RadioGroup
      aria-label="Payment Method"
      name="paymentMethod"
      onChange={handleChange}
      row>
      <FormControlLabel
        value="credit"
        control={<Radio />}
        label="Credit Card"
        onChange={handlePaymentChange}
        checked={values["paymentMethod"] === "credit"}
      />
      <FormControlLabel
        value="wire"
        control={<Radio />}
        label="Wire transfer"
        onChange={handlePaymentChange}
        checked={values["paymentMethod"] === "wire"}
      />
      <FormControlLabel
        value="purchaseOrder"
        control={<Radio />}
        label="Purchase Order (PO)"
        onChange={handlePurchaseOrderChange}
        checked={values["paymentMethod"] === "purchaseOrder"}
      />
    </RadioGroup>
  )
}

export default PaymentMethodRadioGroup
