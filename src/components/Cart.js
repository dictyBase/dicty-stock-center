// @flow
import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartStore } from "store/CartStore"

const useStyles = makeStyles({
  container: {
    margin: "auto",
    width: "80%",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
})

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const Cart = () => {
  const [{ addedItems }] = useCartStore()
  const classes = useStyles()

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid item>
        <Link className={classes.link} to="/cart">
          <FontAwesomeIcon icon="shopping-cart" size="2x" /> (
          {addedItems.length})
        </Link>
      </Grid>
    </Grid>
  )
}

export default Cart
