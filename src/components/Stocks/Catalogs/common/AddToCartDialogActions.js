// @flow
import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import useToggle from "hooks/useToggle"

const useStyles = makeStyles(theme => ({
  cartDialogButton: {
    backgroundColor: "#0059b3",
    color: "#fff",
  },
}))

type Props = {
  /** Function to add to checked items array */
  setCheckedItems: Function,
}

/**
 * AddToCartDialogActions is the display for the action buttons at the bottom
 * of the cart dialog box.
 */

export const AddToCartDialogActions = ({ setCheckedItems }: Props) => {
  const { setFalse } = useToggle(false)
  const classes = useStyles()

  const handleClose = () => {
    setFalse()
    setCheckedItems && setCheckedItems([])
  }

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
