// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SnackbarContent from "@material-ui/core/SnackbarContent"

const useStyles = makeStyles({
  snackbar: {
    backgroundColor: "#cc0000",
  },
})

type Props = {
  /** The error message to display */
  error: string,
}

/** Notification snackbar-style message if user hits some type of error */

const ErrorNotification = ({ error }: Props) => {
  const classes = useStyles()

  return (
    <center>
      <SnackbarContent className={classes.snackbar} message={error} />
      <br />
      <br />
    </center>
  )
}

export default ErrorNotification
