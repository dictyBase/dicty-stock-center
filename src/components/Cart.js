// @flow
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { MapStateToProps } from "react-redux"

const styles = theme => ({
  container: {
    margin: "auto",
    width: "75%",

    [theme.breakpoints.up("xl")]: {
      width: "1270px",
    },
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
})

type Props = {
  /** List of added items in the cart */
  items: Array<Object>,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

export const Cart = (props: Props) => {
  const { items, classes } = props

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid item>
        <Link className={classes.link} to="/cart">
          <FontAwesomeIcon icon="shopping-cart" size="2x" /> ({items.length})
        </Link>
      </Grid>
    </Grid>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  items: state.cart.addedItems,
})

export default connect(mapStateToProps)(withStyles(styles)(Cart))
