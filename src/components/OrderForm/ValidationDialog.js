// @flow
import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

type Props = {
  modalOpen: boolean,
  setModalOpen: Function,
}

/**
 * ValidationDialog is the popup that appears if there is an error in
 * form validation.
 */

const ValidationDialog = ({ modalOpen, setModalOpen }: Props) => (
  <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
    <DialogTitle>{"Validation error"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Some fields are missing. Please ensure that you have filled out all
        required fields and try again.
      </DialogContentText>
    </DialogContent>
  </Dialog>
)

export default ValidationDialog
