// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * PaymentOrganizationInformation contains text fields for organization and lab/group.
 */

const PaymentOrganizationInformation = (props: Props) => {
  const { classes } = props

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Organization:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerOrganization" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Lab/Group:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerLab" />
      </Grid>
    </>
  )
}

export default withStyles(styles)(PaymentOrganizationInformation)
