import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import QuantityDropdown from "./QuantityDropdown"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import { CartItemWithQuantity } from "common/types"

type Props = {
  /** Individual cart item with given quantity */
  item: CartItemWithQuantity
}

/**
 * ShoppingCartItem is an individual item displayed in ShoppingCartList.
 */
const ShoppingCartItem = ({ item }: Props) => {
  return (
    <>
      <ListItem>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={10}>
            <Typography noWrap>
              <strong>
                <Link to={`/${strainOrPlasmid(item.id)}/${item.id}`}>
                  {item.name}
                </Link>
              </strong>
              <br />
              <em>{item.summary}</em>
              <br />
              {item.id}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            container
            justify="flex-end"
            alignItems="center"
            data-testid="cart-quantity">
            <QuantityDropdown id={item.id} />
          </Grid>
          <Grid item xs={1} container justify="flex-end">
            <Typography noWrap>
              ${Number(item.fee) * item.quantity}.00
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  )
}

export default ShoppingCartItem
