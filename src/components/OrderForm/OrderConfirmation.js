// @flow
import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./formStyles"

/**
 * Displays notification that the user's order was submitted successfully.
 */

export const OrderConfirmation = () => {
  const classes = useStyles()

  return (
    <Grid container wrap="wrap" justify="center">
      <Grid item xs={8}>
        <Grid container wrap="wrap" justify="center">
          <Grid item xs={12}>
            <div className={classes.alertBox}>
              <h1>Success!</h1>
              <FontAwesomeIcon icon="check-circle" size="5x" />
              <p>We have sent you a confirmation email.</p>
              <p>
                The <strong>Payer</strong> will soon receive emails through the{" "}
                <strong>NU Core</strong> (Northwestern University) system to
                complete payment.
              </p>
            </div>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              size="large"
              className={classes.btn}>
              <FontAwesomeIcon icon="home" /> &nbsp; Stock Center Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
