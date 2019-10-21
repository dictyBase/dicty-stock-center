// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import PaymentPersonalInformation from "./PaymentPersonalInformation"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import PaymentAddressInformation from "./PaymentAddressInformation"
import PaymentContactInformation from "./PaymentContactInformation"
import useStyles from "../formStyles"

type Props = {}

/**
 * PaymentAddress is a grid container that contains all of the main payer address components.
 */

const PaymentAddress = (props: Props) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <PaymentPersonalInformation {...props} />
      <PaymentOrganizationInformation {...props} />
      <PaymentAddressInformation {...props} />
      <PaymentContactInformation {...props} />
    </Grid>
  )
}

export default PaymentAddress
