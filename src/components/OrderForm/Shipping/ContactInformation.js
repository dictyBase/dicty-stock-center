// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import useStyles from "../formStyles"

/**
 * ContactInformation contains a text field for entering a phone number.
 */

const ContactInformation = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> Phone Number:
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField type="text" name="phone" />
      </Grid>
    </>
  )
}

export default ContactInformation
