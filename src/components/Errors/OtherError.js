// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import sadDicty from "static/sad-dicty.png"
import styles from "./errorStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Full GraphQL error object */
  error: Object,
}

/**
 * OtherError is the UI display when there is a general error.
 */

const OtherError = ({ classes }: Props) => (
  <Grid container className={classes.mainGrid} justify="center">
    <Grid item xs={10} md={8}>
      <div className={classes.error400}>
        <img src={sadDicty} alt="Sad Dicty -- HTTP Error" />
        <h1>
          <FontAwesomeIcon icon="exclamation-circle" /> Error
        </h1>
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

export default withStyles(styles)(OtherError)
