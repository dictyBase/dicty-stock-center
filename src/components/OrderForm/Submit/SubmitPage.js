import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import PanelWrapper from "components/common/PanelWrapper"
import styles from "../formStyles"

const SubmitPage = props => {
  const { classes } = props

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.header}>Please review your order</div>
      </Grid>
      <Grid item xs={12}>
        <PanelWrapper title="Review Order">review your order</PanelWrapper>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SubmitPage)
