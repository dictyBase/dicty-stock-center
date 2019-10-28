// @flow
import React from "react"
import useStyles from "../formStyles"

/**
 * PaymentInfoBoxItems contains the payment methods listed on the payment page.
 */

const PaymentInfoBoxItems = () => {
  const classes = useStyles()

  return (
    <>
      <p>
        <strong>Credit Card: </strong>
        Secure payment when billed. Incurs a <strong>3.5% service fee.</strong>
      </p>
      <p>
        <strong>Wire Transfer: </strong>
        Northwestern bank information will be emailed
      </p>
      <p>
        <strong>PO: </strong>
        Add PO number if available or send ASAP to&nbsp;
        <a
          href="mailto:dictystocks@northwestern.edu"
          target="_top"
          className={classes.link}>
          dictystocks@northwestern.edu
        </a>
      </p>
    </>
  )
}

export default PaymentInfoBoxItems
