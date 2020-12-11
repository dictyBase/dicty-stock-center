import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import SecondaryButton from "common/components/SecondaryButton"
import useCartItems from "common/hooks/useCartItems"
import { useCartStore } from "features/ShoppingCart/CartStore"
import { CartItem } from "common/types"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    paddingRight: "5px",
  },
  quantity: {
    marginRight: "10px",
    minWidth: 70,
  },
  maxItems: {
    color: palette.error.main,
    "&:hover": {
      color: palette.error.dark,
    },
  },
}))

const createQuantityArray = (numItems: number) => {
  const qty = 13 - numItems // quantity of items available to add to cart
  return Array(qty)
    .fill(0) // fill array with meaningless values
    .map((_, i) => i + 1) // map into new array of numbers
    .slice(0, -1) // remove extra item from end
}

type Props = {
  cartData: CartItem
}

const AvailableDisplay = ({ cartData }: Props) => {
  const [{ addedItems, maxItemsInCart }] = useCartStore()
  const values = createQuantityArray(addedItems.length)
  const classes = useStyles()
  const [quantity, setQuantity] = React.useState(values[0])
  const { addToCart } = useCartItems()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(Number(event.target.value))
  }

  const handleClick = () => {
    addToCart(Array(quantity).fill(cartData))
    setQuantity(values[0])
  }

  let content = (
    <Link to="/information/order" className={classes.maxItems}>
      Cart capacity is full
    </Link>
  )

  if (!maxItemsInCart) {
    content = (
      <React.Fragment>
        <Grid item>
          <FormControl className={classes.quantity} variant="outlined">
            <Select
              labelId="quantity-select-label"
              id="quantity-select"
              value={quantity}
              onChange={handleChange}>
              {values.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <SecondaryButton
            variant="contained"
            color="secondary"
            onClick={handleClick}>
            Add to Cart
          </SecondaryButton>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Grid item container alignItems="center" className={classes.container}>
      {content}
    </Grid>
  )
}

export default AvailableDisplay
