import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartStore } from "./CartStore"
import { CartItem } from "common/types"

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "200px",
    padding: theme.spacing(2),
  },
  checkoutBtn: {
    "&:hover": {
      color: "#fff",
    },
  },
}))

// get the total fee for combined items in cart
const getCartTotal = (items: Array<CartItem>) =>
  items
    .map((item: CartItem) => Number(item.fee))
    .reduce((acc, val) => acc + val)

/**
 * ShoppingCartTotalCard displays information about the cart total with a
 * link to checkout.
 */
const ShoppingCartTotalCard = () => {
  const {
    state: { addedItems },
  } = useCartStore()
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="body1" component="span">
            Total &nbsp;
          </Typography>
          <Typography variant="body2" component="span">
            ({addedItems.length} items):
          </Typography>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <strong>${getCartTotal(addedItems)}.00</strong>
        </Grid>
      </Grid>
      <CardActions>
        <Button
          component={Link}
          to="/order/checkout"
          color="secondary"
          variant="contained"
          size="large"
          startIcon={<FontAwesomeIcon icon="shopping-cart" />}
          className={classes.checkoutBtn}>
          Proceed to Checkout
        </Button>
      </CardActions>
    </Card>
  )
}

export default ShoppingCartTotalCard
