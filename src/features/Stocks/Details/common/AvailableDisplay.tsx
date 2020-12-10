import React from "react"
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import CartCapacityFullMessage from "features/Stocks/Details/common/CartCapacityFullMessage"
import { useCartStore } from "features/ShoppingCart/CartStore"

const useStyles = makeStyles({
  container: {
    // border: "1px solid black",
  },
  quantity: {
    marginRight: "18px",
    minWidth: 70,
  },
})

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}))(Button)

const createQuantityArray = (numItems: number) => {
  const qty = 13 - numItems // quantity of items available to add to cart
  return Array(qty)
    .fill(0) // fill array with meaningless values
    .map((_, i) => i + 1) // map into new array of numbers
    .slice(0, -1) // remove extra item from end
}

type Props = {
  cartData: {
    /** Stock ID */
    id: string
    /** Stock name (label/descriptor) */
    name: string
    /** Stock summary */
    summary: string
    /** Strain or plasmid */
    type: string
  }
}

const AvailableDisplay = ({ cartData }: Props) => {
  const [{ addedItems, maxItemsInCart }] = useCartStore()
  const values = createQuantityArray(addedItems.length)
  const classes = useStyles()
  const [quantity, setQuantity] = React.useState(values[0])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(Number(event.target.value))
  }

  let content = <CartCapacityFullMessage />

  if (!maxItemsInCart) {
    content = (
      <React.Fragment>
        <Grid item>
          <FormControl className={classes.quantity}>
            <InputLabel id="quantity-select-label">Quantity</InputLabel>
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
        {/* <AddToCartButton data={Array(quantity).fill(cartData)} inStock={true} /> */}
        <Grid item>
          <ColorButton variant="contained" color="secondary">
            Add to Cart
          </ColorButton>
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
