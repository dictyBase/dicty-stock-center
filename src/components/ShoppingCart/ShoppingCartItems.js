// @flow
import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { removeItem } from "actions/cart"

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
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  trashBtn: {
    minWidth: 0,
  },
  total: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.4rem",
  },
  totalFee: {
    fontSize: "1.4rem",
  },
})

type Props = {
  items: Array<{
    id: string,
    name: string,
    summary: string,
    fee: string,
  }>,
  removeItem: Function,
}

/**
 * ShoppingCartItems lists all of the items in the user's cart.
 */

const ShoppingCartItems = ({ items, removeItem }: Props) => {
  const classes = useStyles()

  // get the total fee for combined items in cart
  const total = items
    .map(item => Number(item.fee))
    .reduce((acc, val) => acc + val)

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12} className={classes.itemsHeader}>
        Your Current Order
      </Grid>
      <Grid item xs={12}>
        <List>
          {items.map((item, index) => {
            let stock = "strains"
            if (item.id.substring(0, 3) === "DBP") {
              stock = "plasmids"
            }

            return (
              <Fragment key={index}>
                <ListItem>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={10} className={classes.item}>
                      <Typography noWrap>
                        <strong>
                          <Link
                            className={classes.link}
                            to={`/${stock}/${item.id}`}>
                            {item.name}
                          </Link>
                        </strong>
                        <br />
                        <em>{item.summary}</em>
                        <br />
                        {item.id}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.item}>
                      <Typography noWrap>${item.fee}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.trashBtn}
                        onClick={() => removeItem(item.id)}>
                        <FontAwesomeIcon icon="trash" />
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </Fragment>
            )
          })}
          <ListItem>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={10} className={classes.total}>
                  Total
                </Grid>
                <Grid item xs={1} className={classes.totalFee}>
                  <strong>${total}.00</strong>
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

const mapStateToProps = state => ({
  items: state.cart.addedItems,
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id))
  },
})

export { ShoppingCartItems }
export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartItems)
