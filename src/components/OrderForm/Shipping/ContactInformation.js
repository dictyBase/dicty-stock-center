// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  classes: Object,
}

const ContactInformation = (props: Props) => {
  const { classes } = props

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Phone Number:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="phone" />
      </Grid>
    </>
  )
}

export default withStyles(styles)(ContactInformation)
