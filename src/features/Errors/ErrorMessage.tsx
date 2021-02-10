import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#fff",
  },
}))

/**
 * ErrorMessage is the "contact us" message displayed on most error pages.
 */
const ErrorMessage = () => {
  const classes = useStyles()

  return (
    <Typography variant="body1" gutterBottom>
      If this problem persists, please email us at{" "}
      <a className={classes.link} href="mailto:dictybase@northwestern.edu">
        dictybase@northwestern.edu
      </a>
      .
    </Typography>
  )
}

export default ErrorMessage
