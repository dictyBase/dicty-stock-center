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
          <p>
            If you believe there is an issue, email us at{" "}
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

export default NotFoundError
