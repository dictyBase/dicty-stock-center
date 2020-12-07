import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Breadcrumbs from "common/components/Breadcrumbs"
import CartIcon from "features/ShoppingCart/CartIcon"

const useStyles = makeStyles({
  container: {
    // margin: "auto",
    // width: "95%",
  },
})

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const HeaderRow = () => {
  const classes = useStyles()

  return (
    <Grid container justify="space-between" className={classes.container}>
      <Grid item>
        <Breadcrumbs />
      </Grid>
      <Grid item>
        <CartIcon />
      </Grid>
    </Grid>
  )
}

export default HeaderRow
