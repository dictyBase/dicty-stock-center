// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import PaymentPersonalInformation from "./PaymentPersonalInformation"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import PaymentAddressInformation from "./PaymentAddressInformation"
import PaymentContactInformation from "./PaymentContactInformation"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * PaymentAddress is a grid container that contains all of the main payer address components.
 */

const PaymentAddress = (props: Props) => {
  const { classes } = props

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

export default withStyles(styles)(PaymentAddress)
