// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import sadDicty from "static/sad-dicty.png"
import styles from "./errorStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Error message to display*/
  error: string,
}

/**
 * NotFoundError is the UI display when an item was not found.
 */

const NotFoundError = ({ classes, error }: Props) => (
  <Grid container className={classes.mainGrid} justify="center">
    <Grid item xs={10} md={8}>
      <div className={classes.error400}>
        <img src={sadDicty} alt="Sad Dicty -- Item Not Found" />
        <h3>{error}</h3>
        <div className={classes.list}>
          <ul>
            <li>This is probably an invalid ID. Try a different one.</li>
            <li>You might be coming here from an outdated link.</li>
          </ul>
        </div>
        <p>
          If the problem persists, please email us at{" "}
          <a className={classes.link} href="mailto:dictybase@northwestern.edu">
            dictybase@northwestern.edu
          </a>
          .
        </p>
        <a href="/">
          <Button
            className={classes.backButton}
            size="small"
            variant="contained"
            color="primary">
            Back to Homepage
          </Button>
        </a>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(NotFoundError)
