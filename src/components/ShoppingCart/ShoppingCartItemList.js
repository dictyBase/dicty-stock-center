// @flow
import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ShoppingCartItem from "./ShoppingCartItem"
import { useCartStore } from "./CartStore"

const useStyles = makeStyles({
  layout: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    "& a": {
      textDecoration: "none",
    },
  },
  itemsHeader: {
    padding: "15px",
    color: "#fff",
    backgroundColor: "rgb(46, 109, 164)",
    textAlign: "center",
    fontWeight: "400",
  },
  total: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.4rem",
  },
  totalFee: {
    fontSize: "1.4rem",
  },
})

// get the total fee for combined items in cart
const getCartTotal = items =>
  items.map(item => Number(item.fee)).reduce((acc, val) => acc + val)

/**
 * ShoppingCartItemList lists all of the items in the user's cart.
 */

const ShoppingCartItemList = () => {
  const [{ addedItems }] = useCartStore()
  const classes = useStyles()

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12} className={classes.itemsHeader}>
        Your Current Order
      </Grid>
      <Grid item xs={12}>
        <List>
          {addedItems.map((item, index) => (
            <ShoppingCartItem key={index} item={item} />
          ))}
          <ListItem>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={10} className={classes.total}>
                  Total
                </Grid>
                <Grid item xs={1} className={classes.totalFee}>
                  <strong>${getCartTotal(addedItems)}.00</strong>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartItemList
