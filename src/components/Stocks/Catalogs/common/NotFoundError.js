// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ErrorMessage from "components/Errors/ErrorMessage"

const useStyles = makeStyles({
  mainGrid: {
    marginBottom: "20px",
  },
  body: {
    paddingTop: "50px",
    textAlign: "center",
  },
  link: {
    color: "#428bca",
    textDecoration: "none",
  },
  catalogPaper: {
    height: 300,
    width: "100%",
  },
})

type Props = {
  /** Error message to display*/
  error: string,
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
          <h1>{error}</h1>
          <p>Please check your query and try again.</p>
          <ErrorMessage />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default NotFoundError
