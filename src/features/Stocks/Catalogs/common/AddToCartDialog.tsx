import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "common/components/DialogTitleDisplay"
import AddToCartDialogContent from "./AddToCartDialogContent"
import AddToCartDialogActions from "./AddToCartDialogActions"
import { CartItem } from "common/types"

type Props = {
  /** Strain data */
  data: Array<CartItem>
  /** Function to add to checked items array */
  setCheckedItems?: (arg0: Array<CartItem>) => void
  /** Function to display dialog box after adding item to cart */
  setShowDialog: (arg0: boolean) => void
}

/**
 * AddToCartDialog is the dialog box that appears when an item
 * is added to the cart.
 */

export const AddToCartDialog = ({
  data,
  setCheckedItems,
  setShowDialog,
}: Props) => {
  const handleClose = () => {
    setShowDialog(false)
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
