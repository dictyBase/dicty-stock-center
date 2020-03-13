import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItemList from "./ShoppingCartItemList"
import useStyles from "./shoppingCartStyles"

const ShoppingCartPageWithItems = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <ShoppingCartItemList />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item className={classes.btnGrid}>
          <Button
            component={Link}
            to="/strains"
            color="default"
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

export default ShoppingCartPageWithItems
