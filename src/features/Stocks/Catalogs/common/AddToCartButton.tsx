import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import { green } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import UnavailableButton from "./UnavailableButton"
import AddToCartDialog from "features/Stocks/Catalogs/common/AddToCartDialog"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import { AddToCartProps } from "../types/cart"

const useStyles = makeStyles((theme) => ({
  cartButton: {
    color: green[600],
  },
}))

/**
 * AddToCartButton appears on the catalog page if the stock is available
 * for purchase.
 */

export const AddToCartButton = ({
  data,
  inStock,
  setCheckedItems,
}: AddToCartProps) => {
  const [{ showCartDialog, maxItemsInCart }] = useCartStore()
  const { addToCart } = useCartItems(data)
  const classes = useStyles()

  let button = (
    <IconButton
      size="medium"
      className={classes.cartButton}
      onClick={addToCart}
      title="Add to cart"
      aria-label="Add to shopping cart">
      <FontAwesomeIcon icon="cart-plus" />
    </IconButton>
  )

  if (!inStock) {
    button = <UnavailableButton title="Item is currently unavailable" />
  }

  if (maxItemsInCart) {
    button = <UnavailableButton title="Shopping cart is full" cartFull />
  }

  return (
    <>
      <strong>{button}</strong>
      {showCartDialog && (
        <AddToCartDialog data={data} setCheckedItems={setCheckedItems} />
      )}
    </>
  )
}

export default AddToCartButton
