import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { useCartStore } from "./CartStore"
import useStyles from "./shoppingCartStyles"

const ShoppingCartPageWithItems = () => {
  const { state } = useCartStore()
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
          {!state.maxItemsInCart && (
            <Button
              component={Link}
              to="/strains"
              color="default"
              variant="contained"
              size="large"
              className={classes.continueBtn}>
              <FontAwesomeIcon icon="share" /> &nbsp; Continue Shopping
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default ShoppingCartPageWithItems
