import React from "react"
import { useFormikContext } from "formik"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { FormikValues } from "../utils/initialValues"

const couriers = ["DHL", "FedEx", "UPS"]

type Props = {
  setShipAccountNum: (arg0: boolean) => void
  setPrepaidNotice: (arg0: boolean) => void
}

/**
 * ShippingMethodRadioGroup contains the radio buttons for listing courier information.
 */

const ShippingMethodRadioGroup = ({
  setShipAccountNum,
  setPrepaidNotice,
}: Props) => {
  const {
    values,
    setFieldValue,
    handleChange,
  } = useFormikContext<FormikValues>()

  const handleShipAccountChange = () => {
    setShipAccountNum(true)
    setPrepaidNotice(false)
    setFieldValue("shippingAccountNumber", "")
  }

  const handlePrepaidLabelChange = () => {
    setShipAccountNum(false)
    setPrepaidNotice(true)
    setFieldValue("shippingAccountNumber", "sending prepaid shipping label")
  }

  return (
    <RadioGroup
      aria-label="Shipping Account"
      name="shippingAccount"
      onChange={handleChange}
      row>
      {couriers.map((item: string) => (
        <FormControlLabel
          key={item}
          value={item}
          control={<Radio />}
          label={item}
          onChange={handleShipAccountChange}
          checked={values["shippingAccount"] === item}
        />
      ))}
      <FormControlLabel
        value="prepaid"
        control={<Radio />}
        label="Send prepaid shipping label"
        onChange={handlePrepaidLabelChange}
        checked={values["shippingAccount"] === "prepaid"}
      />
    </RadioGroup>
  )
}

export default ShippingMethodRadioGroup
