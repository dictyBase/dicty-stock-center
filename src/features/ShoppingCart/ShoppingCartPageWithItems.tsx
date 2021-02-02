import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ShoppingCartItem from "./ShoppingCartItem"
import ShoppingCartTotalCard from "./ShoppingCartTotalCard"
import ContinueShoppingCard from "./ContinueShoppingCard"
import { useCartStore } from "./CartStore"
import { CartItem, CartItemWithQuantity } from "common/types"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    paddingTop: "0px",
  },
}))

/**
 * addQuantityToCartItem creates a map of added items then increases
 * the quantity value for every duplicate item in the cart.
 */
const addQuantityToCartItem = (items: Array<CartItem>) => {
  const itemMap = new Map(
    items.map((item) => [
      item.id,
      {
        ...item,
        quantity: 0,
      },
    ]),
  )

  for (const { id } of items) itemMap.get(id)!.quantity++

  return Array.from(itemMap.values())
}

/**
 * ShoppingCartPageWithItems is the display for the cart page when there are
 * items in the cart.
 */
const ShoppingCartPageWithItems = () => {
  const {
    state: { addedItems, maxItemsInCart },
  } = useCartStore()
  const itemsWithQuantity = addQuantityToCartItem(addedItems)
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <List className={classes.list}>
          {itemsWithQuantity.map((item: CartItemWithQuantity) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </List>
      </Grid>
      <Grid item xs={3}>
        <ShoppingCartTotalCard />
        {!maxItemsInCart && <ContinueShoppingCard />}
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageWithItems
