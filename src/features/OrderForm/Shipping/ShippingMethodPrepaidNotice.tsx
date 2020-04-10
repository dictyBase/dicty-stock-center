import React from "react"
import useStyles from "../formStyles"

/**
 * ShippingMethodPrepaidNotice contains the notice for sending a prepaid
 * shipping label.
 */

const ShippingMethodPrepaidNotice = () => {
  const classes = useStyles()

  return (
    <div className={classes.panelBlue}>
      If using a prepaid shipping label, please send ASAP to{" "}
      <u>
        <a href="mailto:dictystocks@northwestern.edu" target="_top">
          dictystocks@northwestern.edu
        </a>
      </u>
    </div>
  )
}

export default ShippingMethodPrepaidNotice
