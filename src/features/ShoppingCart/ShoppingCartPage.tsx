import React from "react"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import ShoppingCartPageNoItems from "./ShoppingCartPageNoItems"
import useStyles from "./shoppingCartStyles"
import { useCartStore } from "./CartStore"

/** ShoppingCartPage displays different UIs based on whether
 *  there are currently items in the cart. **/

const ShoppingCartPage = () => {
  const [{ addedItems }] = useCartStore()
  const classes = useStyles()

  return (
    <div>
      <Helmet>
        <title>Shopping Cart - Dicty Stock Center</title>
        <meta
          name="description"
          content="Shopping cart page for Dicty Stock Center"
        />
      </Helmet>
      <Grid container justify="center">
        <Grid item>
          <h2 className={classes.header}>Shopping Cart</h2>
        </Grid>
      </Grid>
      {addedItems.length > 0 ? (
        <ShoppingCartPageWithItems />
      ) : (
        <ShoppingCartPageNoItems />
      )}
    </div>
  )
}

export default ShoppingCartPage
