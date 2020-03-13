import React from "react"
import Grid from "@material-ui/core/Grid"
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
          For full payment information please click&nbsp;
          <a
            className={classes.link}
            href="/information/payment"
            target="_blank"
            rel="noopener noreferrer">
            here.
          </a>
        </p>
      </Grid>
    </Grid>
  )
}

export default PaymentInfoBox
