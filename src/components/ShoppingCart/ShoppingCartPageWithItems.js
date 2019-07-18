import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItems from "./ShoppingCartItems"
import styles from "./shoppingCartStyles"

const ShoppingCartPageWithItems = props => {
  const { classes } = props

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <ShoppingCartItems />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item className={classes.btnGrid}>
          <Button
            component={Link}
            to="/strains"
            color="primary"
            variant="contained"
            size="large"
            className={classes.continueBtn}>
            <FontAwesomeIcon icon="share" /> &nbsp; Continue Shopping
          </Button>
          <Button
            component={Link}
            to="/order/checkout"
            color="primary"
            variant="contained"
            size="large"
            className={classes.checkoutBtn}>
            <FontAwesomeIcon icon="shopping-cart" /> &nbsp; Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ShoppingCartPageWithItems)
