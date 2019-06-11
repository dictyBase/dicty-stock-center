// @flow
import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItems from "./ShoppingCartItems"
import type { MapStateToProps } from "react-redux"

const styles = theme => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnGrid: {
    marginTop: "20px",
    marginRight: "5px",
  },
  alertBox: {
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "#a94442",
    backgroundColor: "#f2dede",
    borderColor: "#ebccd1",
    textAlign: "center",
  },
  header: {
    fontSize: "62px",
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  continueBtn: {
    backgroundColor: "#5cb85c",
    marginBottom: "10px",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#449d44",
    },
  },
  checkoutBtn: {
    marginBottom: "10px",
    backgroundColor: "#004080",
    "&:hover": {
      backgroundColor: "#0073e6",
    },
  },
  buttons: {
    textAlign: "center",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
})

type Props = {
  items: Array<Object>,
  classes: Object,
}

/** ShoppingCartPage displays the items in the cart and provides buttons to checkout or continue browsing. */

export const ShoppingCartPage = (props: Props) => {
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
          <h1 className={classes.header}>Shopping Cart</h1>
        </Grid>
      </Grid>
      {items.length > 0 ? (
        <>
          <Grid container justify="center" wrap="wrap">
            <Grid item xs={12}>
              <ShoppingCartItems />
            </Grid>
          </Grid>
          <Grid container wrap="wrap" justify="center">
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
      ) : (
        <Grid container justify="center">
          <Grid item xs={11} sm={7}>
            <div className={classes.alertBox}>
              <strong>
                <FontAwesomeIcon icon="exclamation-circle" />
              </strong>{" "}
              There are no items in your cart.
            </div>
            <Grid container justify="center">
              <Grid item>
                <h2>Browse our catalogs</h2>
                <ul>
                  <li>
                    <Link className={classes.link} to="/strains">
                      Strains Catalog
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.link} to="/plasmids">
                      Plasmids Catalog
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  items: state.cart.addedItems,
})

export default connect(mapStateToProps)(withStyles(styles)(ShoppingCartPage))
