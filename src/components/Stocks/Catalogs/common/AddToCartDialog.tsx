import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import AddToCartDialogContent from "./AddToCartDialogContent"
import AddToCartDialogActions from "./AddToCartDialogActions"
import { useCartStore } from "components/ShoppingCart/CartStore"
import { cartTypes } from "constants/cart"
import { AddToCartProps } from "../types/cart"

/**
 * AddToCartDialog is the dialog box that appears when an item
 * is added to the cart.
 */

export const AddToCartDialog = ({ data, setCheckedItems }: AddToCartProps) => {
  const [, dispatch] = useCartStore()

  const handleClose = () => {
    dispatch({
      type: cartTypes.HIDE_CART_DIALOG,
    })
    setCheckedItems && setCheckedItems([])
  }

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="cart-dialog-title"
      open={true}>
      <DialogTitleDisplay title="Added to Cart" handleClose={handleClose} />
      <AddToCartDialogContent data={data} />
      <AddToCartDialogActions handleClose={handleClose} />
    </Dialog>
  )
}

export default AddToCartDialog
