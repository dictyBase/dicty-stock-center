import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  link: {
    color: "#428bca",
    textDecoration: "none",
  },
})

/**
 * ErrorMessage is the "contact us" message displayed on most error pages.
 */

const ErrorMessage = () => {
  const classes = useStyles()

  return (
    <p>
      If this problem persists, please email us at{" "}
      <a className={classes.link} href="mailto:dictybase@northwestern.edu">
        dictybase@northwestern.edu
      </a>
      .
    </p>
  )
}

export default ErrorMessage
