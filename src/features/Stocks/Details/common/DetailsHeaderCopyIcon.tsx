import React from "react"
import Alert from "@material-ui/lab/Alert"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "features/Stocks/Details/styles"

type Props = {
  /** Stock ID */
  id: string
}

/**
 * DetailsHeaderCopyIcon is the copy to clipboard icon in the header of every
 * stock details page.
 */

const DetailsHeaderCopyIcon = ({ id }: Props) => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
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
        className={classes.copyIcon}
        size="small"
        title="Copy ID to clipboard"
        aria-label="copy icon">
        <FontAwesomeIcon icon="copy" size="xs" />
      </IconButton>
      <div className={classes.id}>
        {snackbarOpen && (
          <Alert severity="success">ID successfully copied to clipboard</Alert>
        )}
      </div>
    </>
  )
}

export default DetailsHeaderCopyIcon
