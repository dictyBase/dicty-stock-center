import React from "react"
import Grid from "@material-ui/core/Grid"
import Breadcrumbs from "common/components/Breadcrumbs"
import CartIcon from "features/ShoppingCart/CartIcon"

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const HeaderRow = () => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>
      <Breadcrumbs />
    </Grid>
    <Grid item>
      <CartIcon />
    </Grid>
  </Grid>
)

export default HeaderRow
