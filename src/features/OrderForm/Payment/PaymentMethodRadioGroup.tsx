import React from "react"
import { useFormikContext } from "formik"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const radioValues = [
  {
    value: "credit",
    label: "Credit Card",
  },
  {
    value: "wire",
    label: "Wire Transfer",
  },
  {
    value: "purchaseOrder",
    label: "Purchase Order (PO)",
  },
]

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
      {radioValues.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={<Radio />}
          label={item.label}
          onChange={
            item.value === "purchaseOrder"
              ? handlePurchaseOrderChange
              : handlePaymentChange
          }
          checked={values["paymentMethod"] === item.value}
        />
      ))}
    </RadioGroup>
  )
}

export default PaymentMethodRadioGroup
