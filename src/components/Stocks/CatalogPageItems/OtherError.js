// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

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
          <p>
            If the problem persists, please email us at{" "}
            <a
              className={classes.link}
              href="mailto:dictybase@northwestern.edu">
              dictybase@northwestern.edu
            </a>
            .
          </p>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OtherError
