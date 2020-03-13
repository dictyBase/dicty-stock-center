import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import useStyles from "../formStyles"

/**
 * AdditionalInformation contains a text area for entering any optional comments.
 */

const AdditionalInformation = (props: any) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <Grid item xs={12} md={3}>
        Comments:
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          {...props}
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

export default AdditionalInformation
