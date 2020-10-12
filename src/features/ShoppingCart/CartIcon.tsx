import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartStore } from "./CartStore"
import useCartItems from "common/hooks/useCartItems"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    margin: "auto",
    width: "95%",
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
  const { getItemsFromStorage } = useCartItems([])
  const classes = useStyles()

  React.useEffect(() => {
    // if there are any updates to local storage in other tabs,
    // this will get the updated items
    window.addEventListener("storage", () => getItemsFromStorage())
  }, [getItemsFromStorage])

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid item>
        <Link to="/cart">
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
