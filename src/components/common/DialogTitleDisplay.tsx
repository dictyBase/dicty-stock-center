import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import DialogTitle from "@material-ui/core/DialogTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    backgroundColor: "#0059b3",
    color: "#fff",
    margin: 0,
    padding: "16px",
  },
  closeButton: {
    position: "absolute",
    right: "8px",
    top: "8px",
    color: "#fff",
  },
}))

type Props = {
  title: string
  handleClose: any
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
