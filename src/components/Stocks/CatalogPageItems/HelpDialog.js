// @flow
import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
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
  link: {
    color: "#004080",
    textDecoration: "none",
  },
}))

type Props = {
  helpDialogOpen: boolean,
  setHelpDialogOpen: Function,
}

/**
 * HelpDialog is the dialog box that appears when the user clicks
 * the help icon in the catalog app bar.
 */

export const HelpDialog = ({ helpDialogOpen, setHelpDialogOpen }: Props) => {
  const classes = useStyles()

  const handleClose = () => {
    setHelpDialogOpen(false)
  }

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="help-dialog-title"
      open={helpDialogOpen}>
      <DialogTitle className={classes.dialogTitle} id="help-dialog-title">
        Catalog Page Help
        <IconButton
          aria-label="help-dialog"
          className={classes.closeButton}
          onClick={handleClose}>
          <FontAwesomeIcon icon="times" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>help content goes here...</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="default">
          Back to Catalog
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpDialog
