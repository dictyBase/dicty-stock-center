import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ErrorMessage from "components/Errors/ErrorMessage"
import useStyles from "./errorStyles"

/**
 * OtherError is the UI display when an item was not found.
 */

const OtherError = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.catalogPaper}>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} className={classes.body}>
          <p>Sorry, we are experiencing technical difficulties.</p>
          <ErrorMessage />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OtherError
