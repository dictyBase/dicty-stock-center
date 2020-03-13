import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import BrowserWarningContent from "./BrowserWarningContent"

const Transition = props => <Slide direction="up" {...props} />

/**
 * BrowserWarning tells the user to upgrade if they are using an outdated version (i.e. IE10 or below).
 * It uses Material-UI's Dialog component and Slide animation.
 */

const BrowserWarning = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}>
        <DialogTitle id="outdated-browser-warning">
          {"You are using an outdated browser!"}
        </DialogTitle>
        <BrowserWarningContent />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default BrowserWarning
