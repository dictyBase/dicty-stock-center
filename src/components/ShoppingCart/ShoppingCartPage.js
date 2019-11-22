// @flow
import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import ShoppingCartPageNoItems from "./ShoppingCartPageNoItems"
import styles from "./shoppingCartStyles"

type Props = {
  items: Array<{
    fee: string,
    id: string,
    name: string,
  }>,
  classes: Object,
}

/** ShoppingCartPage displays different UIs based on whether
 *  there are currently items in the cart. **/

const ShoppingCartPage = (props: Props) => {
  const { items, classes } = props

  return (
    <div className={classes.container}>
      <Helmet>
        <title>Shopping Cart - Dicty Stock Center</title>
        <meta
          name="description"
          content="Shopping cart page for Dicty Stock Center"
        />
      </Helmet>
      <Grid container justify="center">
        <Grid item>
          <h2 className={classes.header}>Shopping Cart</h2>
        </Grid>
      </Grid>
      {items.length > 0 ? (
        <ShoppingCartPageWithItems />
      ) : (
        <ShoppingCartPageNoItems />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.cart.addedItems,
})

export { ShoppingCartPage }
export default connect<*, *, *, *, *, *>(mapStateToProps)(
  withStyles(styles)(ShoppingCartPage),
)
