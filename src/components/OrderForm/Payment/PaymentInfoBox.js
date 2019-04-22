import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import styles from "../formStyles"

const PaymentInfoBox = props => {
  const { classes } = props

  return (
    <Grid container>
      <Grid item xs={12} className={classes.panelBlue}>
        <p>
          <strong>Credit Card: </strong>
          Secure payment when billed. Incurs a{" "}
          <strong>3.5% service fee.</strong>
        </p>
        <p>
          <strong>Wire Transfer: </strong>
          Northwestern bank information will be emailed
        </p>
        <p>
          <strong>PO: </strong>
          Add PO number if available or send ASAP to&nbsp;
          <u>
            <a href="mailto:dictystocks@northwestern.edu" target="_top">
              dictystocks@northwestern.edu
            </a>
          </u>
        </p>
      </Grid>
      <Grid item xs={12} className={classes.panelBlue}>
        <p>
          For full payment information please click&nbsp;
          <u>
            <a
              href="/information/payment"
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
          </u>
        </p>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PaymentInfoBox)
