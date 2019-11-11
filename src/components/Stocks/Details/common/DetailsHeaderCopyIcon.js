// @flow
import React, { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DetailsHeaderSnackbar from "./DetailsHeaderSnackbar"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Stock ID */
  id: string,
}

/**
 * DetailsHeaderCopyIcon is the copy to clipboard icon in the header of every
 * stock details page.
 */

const DetailsHeaderCopyIcon = ({ id }: Props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    navigator.clipboard.writeText(id)
    setSnackbarOpen(true)
    // have snackbar automatically close after 2.5 seconds
    window.setTimeout(() => {
      setSnackbarOpen(false)
    }, 2500)
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        title="Copy ID to clipboard"
        aria-label="copy icon">
        <FontAwesomeIcon icon="copy" size="xs" />
      </IconButton>
      <div className={classes.id}>
        {snackbarOpen && (
          <DetailsHeaderSnackbar id={id} setSnackbarOpen={setSnackbarOpen} />
        )}
      </div>
    </>
  )
}

export default DetailsHeaderCopyIcon
