import React from "react"
import { useFormikContext } from "formik"
import { makeStyles, Theme } from "@material-ui/core/styles"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { FormikValues } from "../utils/initialValues"

const couriers = ["DHL", "FedEx", "UPS"]

const useStyles = makeStyles((theme: Theme) => ({
  radio: {
    "&$checked": {
      color: theme.palette.error.main,
    },
  },
  checked: {},
}))

type Props = {
  /** Function to change shipping account number */
  setShipAccountNum: (arg0: boolean) => void
  /** Function to set the prepaid notice */
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
  const classes = useStyles()

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
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label={item}
          onChange={handleShipAccountChange}
          checked={values["shippingAccount"] === item}
        />
      ))}
      <FormControlLabel
        value="prepaid"
        control={
          <Radio classes={{ root: classes.radio, checked: classes.checked }} />
        }
        label="Send prepaid shipping label"
        onChange={handlePrepaidLabelChange}
        checked={values["shippingAccount"] === "prepaid"}
      />
    </RadioGroup>
  )
}

export default ShippingMethodRadioGroup
