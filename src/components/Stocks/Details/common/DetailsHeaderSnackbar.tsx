import React from "react"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Stock ID */
  id: string
  /** Function to toggle snackbar display */
  setSnackbarOpen: Function
}

/**
 * DetailsHeaderSnackbar is is the snackbar display when the copy to clipboard
 * icon button is clicked.
 */

const DetailsHeaderSnackbar = ({ id, setSnackbarOpen }: Props) => {
  const classes = useStyles()

  return (
    <SnackbarContent
      className={classes.snackbar}
      message={
        <span>
          <FontAwesomeIcon icon="check-circle" className={classes.checkIcon} />
          ID successfully copied to clipboard
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.closeIcon}
          onClick={() => setSnackbarOpen(false)}>
          <FontAwesomeIcon icon="times" />
        </IconButton>,
      ]}
    />
  )
}

export default DetailsHeaderSnackbar
