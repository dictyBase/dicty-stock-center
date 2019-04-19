import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import PanelWrapper from "components/common/PanelWrapper"
import User from "./User"
import styles from "../formStyles"

const ShippingPage = props => {
  const { classes } = props

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.header}>Please enter shipping information</div>
      </Grid>
      <Grid item xs={6}>
        <PanelWrapper title="Shipping Address">
          <User {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <PanelWrapper title="Shipping Method">
              Shipping Method Form goes here
            </PanelWrapper>
          </Grid>
          <Grid item>
            <PanelWrapper title="Additional Information">
              Additional Information Form goes here
            </PanelWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ShippingPage)
