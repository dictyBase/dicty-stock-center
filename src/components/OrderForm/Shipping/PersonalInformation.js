// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import useStyles from "../formStyles"

/**
 * PersonalInformation contains text fields for name and email.
 */

const PersonalInformation = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> First Name:
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField type="text" name="firstName" />
      </Grid>
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> Last Name:
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField type="text" name="lastName" />
      </Grid>
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> Email:
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField type="email" name="email" />
      </Grid>
    </>
  )
}

export default PersonalInformation
