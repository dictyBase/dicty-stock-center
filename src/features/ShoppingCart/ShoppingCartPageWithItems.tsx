import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ShoppingCartItem from "./ShoppingCartItem"
import ShoppingCartTotalCard from "./ShoppingCartTotalCard"
import ContinueShoppingCard from "./ContinueShoppingCard"
import { useCartStore } from "./CartStore"
import useCartItems from "common/hooks/useCartItems"
import { CartItemWithQuantity } from "common/types"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    paddingTop: "0px",
  },
}))

/**
 * ShoppingCartPageWithItems is the display for the cart page when there are
 * items in the cart.
 */
const ShoppingCartPageWithItems = () => {
  const { state } = useCartStore()
  const { itemsWithQuantity } = useCartItems()
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
        {!state.maxItemsInCart && <ContinueShoppingCard />}
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageWithItems
