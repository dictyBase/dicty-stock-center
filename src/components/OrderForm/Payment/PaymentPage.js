// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentAddress from "./PaymentAddress"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * PaymentPage is the display component for when the user is entering payment information.
 */

const PaymentPage = (props: Props) => {
  const { classes } = props

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.header}>Please enter payment information</div>
      </Grid>
      <Grid item xs={6}>
        <PanelWrapper title="Payment Address">
          <PaymentAddress {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <PanelWrapper title="Payment Method">
              <PaymentMethod {...props} />
            </PanelWrapper>
          </Grid>
          <Grid item>
            <PaymentInfoBox />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PaymentPage)
