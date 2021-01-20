import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import OutlinedDropdown from "common/components/OutlinedDropdown"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import { CartItemWithQuantity } from "common/types"

const getDropdownValues = (numItemsInCart: number, currentQuantity: number) => {
  const availableToAdd = 12 - numItemsInCart
  const arr = []
  for (let i = 1; i <= currentQuantity; i++) {
    arr.push(i)
  }

  const secondArr = []
  for (let i = currentQuantity; i <= currentQuantity + availableToAdd; i++) {
    secondArr.push(i)
  }

  const finalArr = arr.concat(secondArr)

  return finalArr.filter(
    (item, index) => finalArr.indexOf(item) === index && item !== 0,
  )
}

type Props = {
  /** Individual cart item with given quantity */
  item: CartItemWithQuantity
}

/**
 * ShoppingCartItem is an individual item displayed in ShoppingCartList.
 */
const ShoppingCartItem = ({ item }: Props) => {
  const {
    state: { addedItems },
  } = useCartStore()

  const matchingItems = addedItems.filter((val) => val.id === item.id)
  const values = getDropdownValues(addedItems.length, matchingItems.length)
  const { addToCart, removeFromCart } = useCartItems()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const qtyNum = Number(event.target.value)
    const qtyDiff = qtyNum - matchingItems.length

    if (qtyDiff === 0) return
    if (qtyDiff < 0) {
      const removableItems = matchingItems.splice(0, Math.abs(qtyDiff))
      removeFromCart(removableItems)
    } else {
      const addableItems = Array(qtyDiff).fill(matchingItems[0])
      addToCart(addableItems)
    }
  }

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
            <OutlinedDropdown
              handleChange={handleChange}
              dropdownValues={values}
              inputValue={matchingItems.length}
              label="Qty"
            />
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

export { getDropdownValues }
export default ShoppingCartItem
