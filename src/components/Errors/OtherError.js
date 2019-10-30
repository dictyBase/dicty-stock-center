// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackToHomepageButton from "components/common/BackToHomepageButton"
import ErrorMessage from "./ErrorMessage"
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
        <ErrorMessage />
        <BackToHomepageButton />
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(OtherError)
