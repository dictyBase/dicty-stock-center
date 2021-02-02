import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItem from "./ShoppingCartItem"
import ShoppingCartTotalCard from "./ShoppingCartTotalCard"
import { useCartStore } from "./CartStore"
import { CartItem, CartItemWithQuantity } from "common/types"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    paddingTop: "0px",
  },
  continueBtn: {
    fontWeight: 600,
    marginTop: theme.spacing(2),
    "&:hover": {
      color: grey[900],
    },
  },
  card: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}))

/**
 * addQuantityToCartItem creates a map of added items then increases
 * the quantity value for every duplicate item in the cart.
 */
const addQuantityToCartItem = (items: Array<CartItem>) => {
  const itemMap = new Map(
    items.map((item) => [
      item.id,
      {
        ...item,
        quantity: 0,
      },
    ]),
  )

  for (const { id } of items) itemMap.get(id)!.quantity++

  return Array.from(itemMap.values())
}

/**
 * ShoppingCartPageWithItems is the display for the cart page when there are
 * items in the cart.
 */
const ShoppingCartPageWithItems = () => {
  const {
    state: { addedItems, maxItemsInCart },
  } = useCartStore()
  const itemsWithQuantity = addQuantityToCartItem(addedItems)
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <List className={classes.list}>
          {itemsWithQuantity.map((item: CartItemWithQuantity) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </List>
      </Grid>
      <Grid item xs={3}>
        <ShoppingCartTotalCard />
        {!maxItemsInCart && (
          <Card className={classes.card}>
            <Typography variant="h3" align="center">
              Need something else?
            </Typography>
            <Button
              component={Link}
              to="/strains"
              color="default"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<FontAwesomeIcon icon="share" />}
              className={classes.continueBtn}>
              Continue Shopping
            </Button>
          </Card>
        )}
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageWithItems
