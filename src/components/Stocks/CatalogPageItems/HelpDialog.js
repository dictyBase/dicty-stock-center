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
        <DialogContentText>
          The catalog page data is provided as as infinite scroll. As you move
          down the page, more data is continuously loaded, creating a seamless
          experience.
        </DialogContentText>
        <DialogContentText>
          The catalog content can be filtered by either selecting an option from
          the left dropdown menu (coming soon), or by performing a search. The
          search box provides a dropdown of available fields. Once you select a
          field, type in your query and hit enter to receive the filtered
          results.
        </DialogContentText>
        <DialogContentText>
          The ellipsis icon on the right side of the app bar provides options to
          download the shown data in either PDF or CSV format (coming soon).
        </DialogContentText>
        <DialogContentText>
          Each row of data contains checkboxes, which if toggled will produce
          new icons to add the items to cart or download a PDF containing those
          selections. Hovering over an item in the list will also show an "add
          to cart" button if the item is available in the DSC.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpDialog
