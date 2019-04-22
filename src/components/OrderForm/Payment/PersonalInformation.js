// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  classes: Object,
}

const PersonalInformation = (props: Props) => {
  const { classes } = props

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> First Name:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerFirstName" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Last Name:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerLastName" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Email:
      </Grid>
      <Grid item xs={8}>
        <TextField type="email" name="payerEmail" />
      </Grid>
    </>
  )
}

export default withStyles(styles)(PersonalInformation)
