// @flow
import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import AddToCartDialogContent from "./AddToCartDialogContent"
import AddToCartDialogActions from "./AddToCartDialogActions"

type Props = {
  /** Strain data */
  data: Array<{
    /** Strain ID number */
    id: string,
    /** Strain label (name) */
    name: string,
    /** Strain summary */
    summary: string,
  }>,
  /** Function to add to checked items array */
  setCheckedItems: Function,
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
  data,
  dialogOpen,
  setDialogOpen,
  setCheckedItems,
}: Props) => {
  const handleClose = () => {
    setDialogOpen(false)
    setCheckedItems && setCheckedItems([])
  }

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="cart-dialog-title"
      open={dialogOpen}>
      <DialogTitleDisplay title="Added to Cart" handleClose={handleClose} />
      <AddToCartDialogContent data={data} />
      <AddToCartDialogActions
        setDialogOpen={setDialogOpen}
        setCheckedItems={setCheckedItems}
      />
    </Dialog>
  )
}

export default AddToCartDialog
