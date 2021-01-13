import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import Typography from "@material-ui/core/Typography"
import BrowserWarningContent from "./BrowserWarningContent"

/**
 * BrowserWarning tells the user to upgrade if they are using an outdated browser and/or version.
 */

const BrowserWarning = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle disableTypography id="outdated-browser-warning">
          <Typography variant="h1">
            You are using an outdated browser!
          </Typography>
        </DialogTitle>
        <BrowserWarningContent />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default BrowserWarning
