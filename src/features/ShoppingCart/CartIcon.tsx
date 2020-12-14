import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartStore } from "./CartStore"
import useCartItems from "common/hooks/useCartItems"

const useStyles = makeStyles(({ palette }) => ({
  cartFull: {
    fontSize: "0.7rem",
    color: palette.secondary.dark,
  },
  colorPrimary: {
    background: palette.secondary.light,
  },
}))

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const CartIcon = () => {
  const {
    state: { addedItems, maxItemsInCart },
  } = useCartStore()
  const { getItemsFromStorage } = useCartItems()
  const classes = useStyles()

  React.useEffect(() => {
    // if there are any updates to local storage in other tabs,
    // this will get the updated items
    window.addEventListener("storage", () => getItemsFromStorage())
  }, [getItemsFromStorage])

  return (
    <React.Fragment>
      <Link to="/cart" aria-label="shopping cart">
        <Badge
          classes={{ colorPrimary: classes.colorPrimary }}
          badgeContent={addedItems.length}
          showZero
          color="primary">
          <FontAwesomeIcon icon="shopping-cart" size="2x" />
        </Badge>
      </Link>
      {maxItemsInCart && <span className={classes.cartFull}>* cart full</span>}
    </React.Fragment>
  )
}

export default CartIcon
