import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartStore } from "./CartStore"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    margin: "auto",
    width: "95%",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  cartFull: {
    fontSize: "0.7rem",
    color: palette.secondary.main,
  },
}))

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const CartIcon = () => {
  const [{ addedItems, maxItemsInCart }] = useCartStore()
  const classes = useStyles()

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid item>
        <Link className={classes.link} to="/cart">
          <FontAwesomeIcon icon="shopping-cart" size="2x" /> (
          {addedItems.length}){" "}
          {maxItemsInCart && (
            <span className={classes.cartFull}>* cart full</span>
          )}
        </Link>
      </Grid>
    </Grid>
  )
}

export default CartIcon
