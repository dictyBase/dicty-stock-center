// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styles = theme => ({
  box: {
    textAlign: "center",
  },
})

type Props = {
  classes: Object,
}

/**
 * Loading screen during the login process
 */

const AuthLoader = (props: Props) => {
  const { classes } = props

  return (
    <Grid container wrap="wrap" justify="center">
      <Grid item className={classes.box}>
        <h1>Logging in...</h1>
        <br />
        <FontAwesomeIcon icon="spinner" size="5x" pulse fixedWidth />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(AuthLoader)
