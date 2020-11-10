import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitleDisplay from "common/components/DialogTitleDisplay"
import HelpDialogContent from "./HelpDialogContent"
import {
  useCatalogStore,
  CatalogActionType,
} from "features/Stocks/Catalogs/common/CatalogContext"

/**
 * HelpDialog is the dialog box that appears when the user clicks
 * the help icon in the catalog app bar.
 */

export const HelpDialog = () => {
  const {
    state: { helpDialogOpen },
    dispatch,
  } = useCatalogStore()

  const handleClose = () => {
    dispatch({
      type: CatalogActionType.SET_HELP_DIALOG_OPEN,
      payload: false,
    })
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
