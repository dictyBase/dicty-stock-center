// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * AdditionalInformation contains a text area for entering any optional comments.
 */

const AdditionalInformation = (props: Props) => {
  const { classes } = props

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <Grid item xs={3}>
        Comments:
      </Grid>
      <Grid item xs={8}>
        <TextField
          type="text"
          name="comments"
          multiline
          rows="5"
          placeholder="Please enter any comments or special instructions here"
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(AdditionalInformation)
