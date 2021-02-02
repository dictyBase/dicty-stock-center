import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import DialogTitle from "@material-ui/core/DialogTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    margin: 0,
    padding: theme.spacing(2),
    fontSize: "2rem",
  },
  closeButton: {
    position: "absolute",
    right: "8px",
    top: "8px",
    color: "#fff",
  },
}))

type Props = {
  /** Title to display at top of dialog */
  title: string
  /** Function to call when close button is clicked */
  handleClose: () => void
}

/**
 * DialogTitleDisplay is the title of a dialog box.
 */

export const DialogTitleDisplay = ({ title, handleClose }: Props) => {
  const classes = useStyles()

  return (
    <DialogTitle className={classes.dialogTitle} id={title}>
      {title}
      <IconButton
        aria-label={title}
        className={classes.closeButton}
        onClick={handleClose}>
        <FontAwesomeIcon icon="times" />
      </IconButton>
    </DialogTitle>
  )
}

export default DialogTitleDisplay
