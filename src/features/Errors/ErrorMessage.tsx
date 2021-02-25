import React from "react"
import Typography from "@material-ui/core/Typography"
/**
 * ErrorMessage is the "contact us" message displayed on most error pages.
 */
const ErrorMessage = () => {
  return (
    <Typography variant="body1" gutterBottom>
      If this problem persists, please email us at{" "}
      <a href="mailto:dictybase@northwestern.edu">dictybase@northwestern.edu</a>
      .
    </Typography>
  )
}

export default ErrorMessage
