import React from "react"
import { Helmet } from "react-helmet"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import EmptyCartPage from "./EmptyCartPage"
import { useCartStore } from "./CartStore"

/** ShoppingCartPage displays different UIs based on whether
 *  there are currently items in the cart. **/

const ShoppingCartPage = () => {
  const {
    state: { addedItems },
  } = useCartStore()

  return (
    <React.Fragment>
      <Helmet>
        <title>Shopping Cart - Dicty Stock Center</title>
        <meta
          name="description"
          content="Shopping cart page for Dicty Stock Center"
        />
      </Helmet>
      <Box marginTop={3} marginBottom={3}>
        <Typography variant="h1">Your Shopping Cart</Typography>
      </Box>
      {addedItems.length > 0 ? (
        <ShoppingCartPageWithItems />
      ) : (
        <EmptyCartPage />
      )}
    </React.Fragment>
  )
}

export default ShoppingCartPage
