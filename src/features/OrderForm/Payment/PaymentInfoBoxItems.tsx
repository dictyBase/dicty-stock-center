import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

/**
 * PaymentInfoBoxItems contains the payment methods listed on the payment page.
 */

const PaymentInfoBoxItems = () => (
  <Box mb={1}>
    <Typography gutterBottom>
      <strong>Credit Card: </strong>
      Secure payment when billed. Incurs a <strong>3.5% service fee.</strong>
    </Typography>
    <Typography gutterBottom>
      <strong>Wire Transfer: </strong>
      Northwestern bank information will be emailed
    </Typography>
    <Typography gutterBottom>
      <strong>PO: </strong>
      Add PO number if available or send ASAP to&nbsp;
      <a href="mailto:dictystocks@northwestern.edu" target="_top">
        dictystocks@northwestern.edu
      </a>
    </Typography>
  </Box>
)

export default PaymentInfoBoxItems
