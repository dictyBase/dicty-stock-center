import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import PanelWrapper from "components/common/PanelWrapper"
import styles from "../formStyles"

const PaymentPage = props => {
  const { classes } = props

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.header}>Please enter payment information</div>
      </Grid>
      <Grid item xs={6}>
        <PanelWrapper title="Payment Address">
          Payment Address Form goes here
        </PanelWrapper>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <PanelWrapper title="Payment Method">
              Payment Method Form goes here
            </PanelWrapper>
          </Grid>
          <Grid item>
            <PanelWrapper title="Payment Information">
              Payment info goes here
            </PanelWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PaymentPage)
