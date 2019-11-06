// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import ServerError from "./ServerError"
import OtherError from "./OtherError"
import styles from "./errorStyles"
import NotFoundError from "components/Stocks/Catalogs/common/NotFoundError"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** the object that contains auth data from current state */
  auth: Object,
  /** the object that contains page data from current state */
  page: Object,
}

/**
 * General error handling page. It displays different messages based on HTTP status code.
 */

export const ErrorPage = ({ auth, page, classes }: Props) => {
  let errorStatus = 0
  let errorMsg = ""

  if (auth.error) {
    errorStatus = auth.error.status
    errorMsg = auth.error.title
  }

  if (page.error) {
    errorStatus = page.error.status
    errorMsg = page.error.title
  }

  if (errorStatus >= 500) {
    return <ServerError />
  }

  if (errorStatus === 404) {
    return <NotFoundError error={errorMsg} />
  }

  return <OtherError />
}

const mapStateToProps = ({ auth, page }) => ({ auth, page })

export default connect<*, *, *, *, *, *>(mapStateToProps)(
  withStyles(styles)(ErrorPage),
)
