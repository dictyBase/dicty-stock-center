import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ShoppingCartItem from "./ShoppingCartItem"
import ShoppingCartTotalCard from "./ShoppingCartTotalCard"
import { useCartStore } from "./CartStore"
import { CartItem, CartItemWithQuantity } from "common/types"

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
 * ShoppingCartItemList lists all of the items in the user's cart.
 */
const ShoppingCartItemList = () => {
  const {
    state: { addedItems },
  } = useCartStore()
  const itemsWithQuantity = addQuantityToCartItem(addedItems)

  return (
    <Grid container>
      <Grid item xs={9}>
        <List>
          {itemsWithQuantity.map((item: CartItemWithQuantity) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </List>
      </Grid>
      <Grid item xs={3}>
        <ShoppingCartTotalCard />
      </Grid>
    </Grid>
  )
}

export default ShoppingCartItemList
