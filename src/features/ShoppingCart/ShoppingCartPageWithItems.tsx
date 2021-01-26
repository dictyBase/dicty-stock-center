import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { useCartStore } from "./CartStore"

const useStyles = makeStyles((theme) => ({
  continueBtn: {
    fontWeight: 1000,
    margin: theme.spacing(2),
  },
}))

/**
 * ShoppingCartPageWithItems is the display for the cart page when there are
 * items in the cart.
 */
const ShoppingCartPageWithItems = () => {
  const {
    state: { maxItemsInCart },
  } = useCartStore()
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <ShoppingCartItemList />
      </Grid>
      <Grid item>
        {!maxItemsInCart && (
          <Button
            component={Link}
            to="/strains"
            color="default"
            variant="contained"
            size="large"
            startIcon={<FontAwesomeIcon icon="share" />}
            className={classes.continueBtn}>
            Continue Shopping
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageWithItems
