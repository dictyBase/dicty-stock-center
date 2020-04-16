import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./formStyles"

type LocationProps = {
  location: {
    pathname: string
    state?: {
      orderID: string
    }
  }
}

/**
 * Displays notification that the user's order was submitted successfully.
 */

const OrderConfirmation = ({ location }: LocationProps) => {
  const classes = useStyles()

  let content = (
    <Alert className={classes.warningBox} severity="warning">
      <AlertTitle>Unavailable</AlertTitle>
      <p>This page is reserved for successful order submission.</p>
      <p>
        If you would like to place an order, please add items to your cart and
        go through the checkout process.
      </p>
    </Alert>
  )

  if (location.state !== undefined) {
    content = (
      <div className={classes.alertBox}>
        <h1>Success!</h1>
        <FontAwesomeIcon icon="check-circle" size="4x" />
        <p className={classes.confirmation}>
          <strong>Order ID: {location.state.orderID}</strong>
        </p>
        <p>We have sent you a confirmation email.</p>
        <p>
          The <strong>Payer</strong> will soon receive emails through the{" "}
          <strong>NU Core</strong> (Northwestern University) system to complete
          payment.
        </p>
      </div>
    )
  }

  return (
    <Grid container wrap="wrap" justify="center">
      <Grid item xs={8}>
        <Grid container wrap="wrap" justify="center">
          <Grid item xs={12}>
            {content}
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
