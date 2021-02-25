import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ErrorMessage from "features/Errors/ErrorMessage"
import useStyles from "./errorStyles"

type Props = {
  /** Error message to display*/
  error: string
}

/**
 * NotFoundError is the UI display when an item was not found.
 */

const NotFoundError = ({ error }: Props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.catalogPaper}>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} className={classes.body}>
          <Typography variant="h1" gutterBottom>
            {error}
          </Typography>
          <Typography gutterBottom>
            Please check your query and try again.
          </Typography>
          <ErrorMessage />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default NotFoundError
