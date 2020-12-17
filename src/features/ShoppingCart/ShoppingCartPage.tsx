import React from "react"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import EmptyCartPage from "./EmptyCartPage"
import useStyles from "./shoppingCartStyles"
import { useCartStore } from "./CartStore"

/** ShoppingCartPage displays different UIs based on whether
 *  there are currently items in the cart. **/

const ShoppingCartPage = () => {
  const {
    state: { addedItems },
  } = useCartStore()
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
          <Typography variant="h1" className={classes.header}>
            Shopping Cart
          </Typography>
        </Grid>
      </Grid>
      {addedItems.length > 0 ? (
        <ShoppingCartPageWithItems />
      ) : (
        <EmptyCartPage />
      )}
    </div>
  )
}

export default ShoppingCartPage
