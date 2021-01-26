import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import ListItem from "@material-ui/core/ListItem"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import OutlinedDropdown from "common/components/OutlinedDropdown"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import { maxItemsInCart } from "common/constants/cart"
import { CartItemWithQuantity } from "common/types"

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: theme.palette.primary.light,
  },
  container: {
    minHeight: "200px",
    borderRadius: "0px",
    border: `1px solid ${grey[200]}`,
  },
  fee: {
    color: theme.palette.error.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

/**
 * getDropdownValues generates a list of possible numbers based on how
 * many items are in the cart.
 */
const getDropdownValues = (numItemsInCart: number, currentQuantity: number) => {
  /**
   * Process for generating values:
   * 1. Create array of values from 1 to the current number of selected item in
   *    cart (i.e. 1-4)
   * 2. Create array of values from current quantity number (i.e. 4) to the
   *    maximum allowed in cart (12 - 4, which would create an array of 4-8)
   * 3. Merge these arrays
   */
  const arr = []
  for (let i = 1; i < currentQuantity; i++) {
    arr.push(i)
  }

  const secondArr = []
  const availableToAdd = maxItemsInCart - numItemsInCart
  for (let i = currentQuantity; i <= currentQuantity + availableToAdd; i++) {
    secondArr.push(i)
  }

  return arr.concat(secondArr)
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
  // get array of all items with given ID
  const matchingItems = addedItems.filter((val) => val.id === item.id)
  // generate values to display in quantity dropdown
  const values = getDropdownValues(addedItems.length, matchingItems.length)
  const { addToCart, removeFromCart } = useCartItems()
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // get quantity from dropdown selection
    const qtyNum = Number(event.target.value)
    // calculate the difference between how many of this item are in the cart and
    // the quantity now selected in the dropdown
    const qtyDiff = qtyNum - matchingItems.length

    // if there's no change in quantity then do nothing
    if (qtyDiff === 0) return
    // negative quantity difference means the user is removing items
    if (qtyDiff < 0) {
      const removableItems = matchingItems.splice(0, Math.abs(qtyDiff))
      removeFromCart(removableItems)
    } else {
      // if positive, generate an array of the same item with new quantity
      // and add those items to the cart
      const addableItems = Array(qtyDiff).fill(matchingItems[0])
      addToCart(addableItems)
    }
  }

  const stock = strainOrPlasmid(item.id)

  return (
    <Card className={classes.container}>
      <CardHeader
        avatar={
          <Avatar aria-label="stock" className={classes.avatar}>
            {stock === "strains" ? "S" : "P"}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="Remove Item"
            onClick={() => removeFromCart(matchingItems)}>
            <FontAwesomeIcon icon="times" />
          </IconButton>
        }
        title={
          <Typography variant="h2">
            <Link to={`/${stock}/${item.id}`}>{item.name}</Link>
          </Typography>
        }
        disableTypography
      />
      <ListItem>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Typography noWrap>
              <em>{item.summary}</em>
            </Typography>
            <Typography noWrap>{item.id}</Typography>
            <Typography
              variant="h3"
              noWrap
              className={classes.fee}
              data-testid="fee">
              ${Number(item.fee) * item.quantity}.00
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            container
            justify="center"
            data-testid="cart-quantity">
            <OutlinedDropdown
              handleChange={handleChange}
              dropdownValues={values}
              inputValue={matchingItems.length}
              label="Qty"
            />
          </Grid>
        </Grid>
      </ListItem>
    </Card>
  )
}

export { getDropdownValues }
export default ShoppingCartItem
