import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartIcon from "features/ShoppingCart/CartIcon"

const useStyles = makeStyles({
  container: {
    margin: "auto",
    width: "95%",
  },
})

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

const HeaderRow = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item container justify="flex-end">
        <CartIcon />
      </Grid>
    </Grid>
  )
}

export default HeaderRow
