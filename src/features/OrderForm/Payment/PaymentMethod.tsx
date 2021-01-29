import React, { useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "../TextField"
import RequiredTextLabel from "../RequiredTextLabel"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"

const useStyles = makeStyles((theme: Theme) => ({
  waiver: {
    backgroundColor: grey[200],
    border: "1px solid #e6f2ff",
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2),
    padding: theme.spacing(3),
  },
}))

/**
 * PaymentMethod contains radio buttons and a text field for listing payment method information.
 */

const PaymentMethod = () => {
  const [purchaseOrderNum, setPurchaseOrderNum] = useState(false)
  const [waiverRequested, setWaiverRequested] = useState(false)
  const classes = useStyles()

  return (
    <Box mt={1} mb={2} p={2}>
      <RequiredTextLabel title="Payment Account" variant="h3" />
      <Box mt={1} />
      <PaymentMethodRadioGroup
        setPurchaseOrderNum={setPurchaseOrderNum}
        setWaiverRequested={setWaiverRequested}
      />
      {purchaseOrderNum && (
        <TextField name="purchaseOrderNum" placeholder="PO Number" />
      )}
      {waiverRequested && (
        <Typography component="p" className={classes.waiver}>
          Please send an email to{" "}
          <a href="mailto:dictystocks@northwestern.edu" target="_top">
            dictystocks@northwestern.edu
          </a>{" "}
          describing why you need a waiver.
        </Typography>
      )}
    </Box>
  )
}

export default PaymentMethod
