import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ShoppingCartItem from "./ShoppingCartItem"
import { useCartStore } from "./CartStore"
import { CartItem, CartItemWithQuantity } from "common/types"

const useStyles = makeStyles({
  itemsHeader: {
    padding: "15px",
    color: "#fff",
    backgroundColor: "rgb(46, 109, 164)",
    textAlign: "center",
    fontWeight: 400,
  },
  total: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.4rem",
  },
  totalFee: {
    fontSize: "1.4rem",
  },
})

// get the total fee for combined items in cart
const getCartTotal = (items: Array<CartItem>) =>
  items
    .map((item: CartItem) => Number(item.fee))
    .reduce((acc, val) => acc + val)

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
  const classes = useStyles()

  const itemsWithQuantity = addQuantityToCartItem(addedItems)

  return (
    <Grid container>
      <Grid item xs={12} className={classes.itemsHeader}>
        Your Current Order
      </Grid>
      <Grid item xs={12}>
        <List>
          {itemsWithQuantity.map(
            (item: CartItemWithQuantity, index: number) => (
              <ShoppingCartItem key={index} item={item} />
            ),
          )}
          <ListItem>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={10} className={classes.total}>
                  Total
                </Grid>
                <Grid
                  item
                  xs={2}
                  container
                  justify="flex-end"
                  className={classes.totalFee}>
                  <strong>${getCartTotal(addedItems)}.00</strong>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartItemList
