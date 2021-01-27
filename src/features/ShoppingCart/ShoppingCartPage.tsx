import React from "react"
import { Helmet } from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import EmptyCartPage from "./EmptyCartPage"
import { useCartStore } from "./CartStore"

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}))

/** ShoppingCartPage displays different UIs based on whether
 *  there are currently items in the cart. **/
const ShoppingCartPage = () => {
  const { state } = useCartStore()
  const classes = useStyles()

  let content = <EmptyCartPage />
  if (state.addedItems.length > 0) {
    content = <ShoppingCartPageWithItems />
  }

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
        <Divider className={classes.divider} />
      </Box>
      {content}
    </React.Fragment>
  )
}

export default ShoppingCartPage
