// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import styles from "./errorStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * ServerError is the UI display when there is a server error.
 */

const ServerError = ({ classes }: Props) => (
  <Grid container className={classes.mainGrid} justify="center">
    <Grid item xs={10} md={8}>
      <div className={classes.error500}>
        <h2>Sorry! There was a server error.</h2>
        <p>
          If the problem persists, please email us at{" "}
          <a
            className={classes.link500}
            href="mailto:dictybase@northwestern.edu">
            dictybase@northwestern.edu
          </a>
          .
        </p>
        <a href="/">
          <Button
            className={classes.backButton}
            size="small"
            variant="contained"
            color="default">
            Back to homepage
          </Button>
        </a>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(ServerError)
