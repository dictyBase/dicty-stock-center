// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import TextField from "../TextField"
import useStyles from "../formStyles"

/**
 * OrganizationInformation contains text fields for organization and lab/group.
 */

const OrganizationInformation = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Organization:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="organization" />
      </Grid>
      <Grid item xs={3}>
        <span className={classes.requiredText}>*</span> Lab/Group:
      </Grid>
      <Grid item xs={8}>
        <TextField type="text" name="lab" />
      </Grid>
    </>
  )
}

export default OrganizationInformation
