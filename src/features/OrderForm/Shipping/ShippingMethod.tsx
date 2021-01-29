import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"

/**
 * ShippingMethod contains radio buttons and a text field for listing courier information.
 */

const ShippingMethod = () => {
  const [shipAccountNum, setShipAccountNum] = useState(true)
  const [prepaidNotice, setPrepaidNotice] = useState(false)

  return (
    <Box mt={1} mb={2} p={2}>
      <RequiredTextLabel title="Shipping Account" variant="h3" />
      <Box mt={1} />
      <ShippingMethodRadioGroup
        setShipAccountNum={setShipAccountNum}
        setPrepaidNotice={setPrepaidNotice}
      />
      {shipAccountNum && (
        <TextField
          name="shippingAccountNumber"
          placeholder="Shipping Account Number"
        />
      )}
      {prepaidNotice && <ShippingMethodPrepaidNotice />}
      <Box mt={1} />
      <Typography component="p">
        <em>Note: credit card is not allowed for shipment</em>
      </Typography>
    </Box>
  )
}

export default ShippingMethod
