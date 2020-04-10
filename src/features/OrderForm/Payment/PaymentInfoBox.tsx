import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PaymentInfoBoxItems from "./PaymentInfoBoxItems"
import useStyles from "../formStyles"

/**
 * PaymentInfoBox contains general information about making a payment.
 */

const PaymentInfoBox = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={classes.panelBlue}>
        <PaymentInfoBoxItems />
        <p>
          <Button
            component={Link}
            to="/information/payment"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            className={classes.paymentBtn}>
            Payment Information
            <FontAwesomeIcon
              icon="external-link-alt"
              size="sm"
              className={classes.arrowIcon}
            />
          </Button>
        </p>
      </Grid>
    </Grid>
  )
}

export default PaymentInfoBox
