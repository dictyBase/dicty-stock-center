import React from "react"
import Alert from "@material-ui/lab/Alert"
import Typography from "@material-ui/core/Typography"

/**
 * SubmitError is the display if there is an error in form submission.
 */
const SubmitError = () => {
  return (
    <Alert severity="error">
      <Typography variant="body1">
        There was an error submitting your order. This is most likely a problem
        on our end. If the problem persists, please email us at &nbsp;
        <a
          href="mailto:dictystocks@northwestern.edu?Subject=Question"
          target="_top">
          dictystocks@northwestern.edu
        </a>
        .
      </Typography>
    </Alert>
  )
}

export default SubmitError
