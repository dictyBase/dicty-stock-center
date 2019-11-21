// @flow
import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import DialogActions from "@material-ui/core/DialogActions"
import AddToCartDialogContent from "components/Stocks/Catalogs/common/AddToCartDialogContent"

const useStyles = makeStyles(({ palette }) => ({
  link: {
    color: palette.primary.main,
    textDecoration: "none",
  },
}))

type Props = {
  /** Strain data */
  cartData: {
    /** Strain ID number */
    id: string,
    /** Strain label (name) */
    name: string,
    /** Strain summary */
    summary: string,
  },
  /** Boolean for whether item added dialog is open */
  dialogOpen: boolean,
  /** Function that toggles whether dialog is open */
  setDialogOpen: Function,
}

/**
 * AddToCartDialog is the dialog box that appears when an item
 * is added to the cart.
 */

export const AddToCartDialog = ({
  cartData,
  dialogOpen,
  setDialogOpen,
}: Props) => {
  const classes = useStyles()
  const handleClose = () => {
    setDialogOpen(false)
  }

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="cart-dialog-title"
      open={dialogOpen}>
      <DialogTitleDisplay title="Added to Cart" handleClose={handleClose} />
      <AddToCartDialogContent data={[cartData]} />
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
    </Dialog>
  )
}

export default AddToCartDialog
