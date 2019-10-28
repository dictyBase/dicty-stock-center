// @flow
import React from "react"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

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
  setShipAccountNum: Function,
  setPrepaidNotice: Function,
}

/**
 * ShippingMethodRadioGroup contains the radio buttons for listing courier information.
 */

const ShippingMethodRadioGroup = ({
  handleChange,
  setFieldValue,
  setShipAccountNum,
  setPrepaidNotice,
}: Props) => {
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
  )
}

export default ShippingMethodRadioGroup
