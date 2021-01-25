import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import { useCartStore } from "./CartStore"
import { CartItem } from "common/types"

const useStyles = makeStyles({
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
 * ShoppingCartTotalCard displays information about the cart total with a
 * link to checkout.
 */
const ShoppingCartTotalCard = () => {
  const {
    state: { addedItems },
  } = useCartStore()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={10} className={classes.total}>
        Total
      </Grid>
      <Grid
        item
        xs={1}
        container
        justify="flex-end"
        className={classes.totalFee}>
        <strong>${getCartTotal(addedItems)}.00</strong>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default ShoppingCartTotalCard
