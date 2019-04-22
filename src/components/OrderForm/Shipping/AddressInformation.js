// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  classes: Object,
}

const AddressInformation = (props: Props) => {
  const { classes } = props

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Address:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="address1" />
      </Grid>
      <Grid item xs={3}>
        Address:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="address2" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> City:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="city" />
      </Grid>
      <Grid item xs={3}>
        State/Province:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="state" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Zip Code:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="zip" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Country:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="country" />
      </Grid>
    </>
  )
}

export default withStyles(styles)(AddressInformation)
