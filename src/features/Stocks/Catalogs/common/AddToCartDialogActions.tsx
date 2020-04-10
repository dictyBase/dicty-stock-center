import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"

const useStyles = makeStyles(theme => ({
  cartDialogButton: {
    backgroundColor: "#0059b3",
    color: "#fff",
  },
}))

type Props = {
  /** Function called when closing the dialog box */
  handleClose: () => void
}

/**
 * AddToCartDialogActions is the display for the action buttons at the bottom
 * of the cart dialog box.
 */

export const AddToCartDialogActions = ({ handleClose }: Props) => {
  const classes = useStyles()

  return (
    <DialogActions>
      <Button onClick={handleClose} variant="outlined" color="default">
        Continue Shopping
      </Button>
      <Button
        component={Link}
        to="/cart"
        className={classes.cartDialogButton}
        variant="contained"
        color="primary">
        View Cart
      </Button>
    </DialogActions>
  )
}

export default AddToCartDialogActions
