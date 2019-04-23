// @flow
import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AlertSuccess, PrimaryLargeButton } from "styles"

type Props = {
  /** the current order ID number */
  id: number,
}

/**
 * Displays notification that the user's order was submitted successfully.
 */

export const OrderConfirmation = (props: Props) => (
  <Grid container wrap="wrap" justify="center">
    <Grid item xs={8}>
      <Grid container wrap="wrap" justify="center">
        <Grid item xs={12}>
          <AlertSuccess>
            <FontAwesomeIcon icon="check-circle" size="5x" />
            <h3>Thank you, your order has been submitted successfully!</h3>
            <p>
              Order Number: <strong>{props.id}</strong>
            </p>
            <p>We have sent you a confirmation email.</p>
            <p>
              The <strong>Payer</strong> will soon receive emails through the{" "}
              <strong>NU Core</strong> system to complete payment.
            </p>
          </AlertSuccess>
        </Grid>
        <Grid item xs={12}>
          <PrimaryLargeButton>
            <Link to="/">
              <FontAwesomeIcon icon="home" /> Stock Center Home
            </Link>
          </PrimaryLargeButton>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default OrderConfirmation
