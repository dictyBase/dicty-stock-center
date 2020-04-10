import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import useStyles from "features/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "features/Stocks/Catalogs/common/AddToCartButton"
import CartCapacityFullMessage from "./CartCapacityFullMessage"
import { useCartStore } from "features/ShoppingCart/CartStore"

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

const createQuantityArray = (numItems: number) => {
  const qty = 13 - numItems // quantity of items available to add to cart
  return Array(qty)
    .fill(0) // fill array with meaningless values
    .map((_, i) => i + 1) // map into new array of numbers
    .slice(0, -1) // remove extra item from end
}

/**
 * AvailableCardDisplay is used on stock details pages if the
 * item is currently available for ordering.
 */

const AvailableCardDisplay = ({ cartData }: Props) => {
  const [{ addedItems, maxItemsInCart }] = useCartStore()
  const values = createQuantityArray(addedItems.length)
  const classes = useStyles()
  const [quantity, setQuantity] = React.useState(values[0])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuantity(Number(event.target.value))
  }

  let content = <CartCapacityFullMessage />

  if (!maxItemsInCart) {
    content = (
      <>
        <TextField
          id="outlined-quantity"
          select
          label="Quantity"
          value={quantity}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          inputProps={{ className: classes.textField }}>
          {values.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <AddToCartButton data={Array(quantity).fill(cartData)} />
      </>
    )
  }

  return (
    <div>
      <Typography variant="h6" className={classes.cardHeader}>
        <FontAwesomeIcon icon="check" /> Available
      </Typography>
      <Divider />
      <div className={classes.quantity}>{content}</div>
      <Divider />
      <Button
        component={Link}
        to="/cart"
        classes={{
          root: classes.checkoutBtn,
        }}
        fullWidth>
        <FontAwesomeIcon
          icon="arrow-right"
          size="sm"
          className={classes.arrowIcon}
        />
        Go to Cart
      </Button>
    </div>
  )
}

export default AvailableCardDisplay
