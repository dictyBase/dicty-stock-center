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
        <TextField type="text" name="payerAddress1" />
      </Grid>
      <Grid item xs={3}>
        Address:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerAddress2" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> City:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerCity" />
      </Grid>
      <Grid item xs={3}>
        State/Province:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerState" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Zip Code:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerZip" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Country:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="payerCountry" />
      </Grid>
    </>
  )
}

export default withStyles(styles)(AddressInformation)
