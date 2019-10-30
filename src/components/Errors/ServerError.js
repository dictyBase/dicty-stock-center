// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import BackToHomepageButton from "components/common/BackToHomepageButton"
import ErrorMessage from "./ErrorMessage"
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
        <ErrorMessage />
        <BackToHomepageButton />
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(ServerError)
