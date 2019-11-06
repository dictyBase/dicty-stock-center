// @flow
import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import HelpDialogContent from "./HelpDialogContent"

type Props = {
  helpDialogOpen: boolean,
  setHelpDialogOpen: Function,
}

/**
 * HelpDialog is the dialog box that appears when the user clicks
 * the help icon in the catalog app bar.
 */

export const HelpDialog = ({ helpDialogOpen, setHelpDialogOpen }: Props) => {
  const handleClose = () => {
    setHelpDialogOpen(false)
  }

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="help-dialog-title"
      open={helpDialogOpen}>
      <DialogTitleDisplay title="Catalog Page Help" handleClose={handleClose} />
      <HelpDialogContent />
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpDialog
