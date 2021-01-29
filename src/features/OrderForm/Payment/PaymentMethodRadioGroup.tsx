import React from "react"
import { useFormikContext } from "formik"
import { makeStyles, Theme } from "@material-ui/core/styles"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { FormikValues } from "../utils/initialValues"

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
  {
    value: "waiver",
    label: "Waiver Requested",
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  radio: {
    "&$checked": {
      color: theme.palette.error.main,
    },
  },
  checked: {},
}))

type Props = {
  /** Function to toggle selection of Purchase Order Number radio button */
  setPurchaseOrderNum: (arg0: boolean) => void
  /** Function to toggle selection of Waiver Requested radio button */
  setWaiverRequested: (arg0: boolean) => void
}

/**
 * PaymentMethodRadioGroup contains radio buttons for payment methods.
 */

const PaymentMethodRadioGroup = ({
  setPurchaseOrderNum,
  setWaiverRequested,
}: Props) => {
  const {
    values,
    setFieldValue,
    handleChange,
  } = useFormikContext<FormikValues>()
  const classes = useStyles()

  const handlePaymentChange = (event: React.ChangeEvent<any>) => {
    switch (event.target.value) {
      case "purchaseOrder":
        setPurchaseOrderNum(true)
        setWaiverRequested(false)
        setFieldValue("purchaseOrderNum", "")
        break
      case "waiver":
        setPurchaseOrderNum(false)
        setWaiverRequested(true)
        setFieldValue("purchaseOrderNum", "N/A")
        break
      default:
        setPurchaseOrderNum(false)
        setWaiverRequested(false)
        setFieldValue("purchaseOrderNum", "N/A")
    }
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
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label={item.label}
          onChange={handlePaymentChange}
          checked={values["paymentMethod"] === item.value}
        />
      ))}
    </RadioGroup>
  )
}

export default PaymentMethodRadioGroup
