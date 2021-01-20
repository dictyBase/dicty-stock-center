import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import OutlinedDropdown from "common/components/OutlinedDropdown"
import SecondaryButton from "common/components/SecondaryButton"
import AddToCartDialog from "features/Stocks/Catalogs/common/AddToCartDialog"
import useCartItems from "common/hooks/useCartItems"
import { useCartStore } from "features/ShoppingCart/CartStore"
import { CartItem } from "common/types"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    paddingRight: "5px",
  },
  quantity: {
    marginRight: "10px",
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
  const {
    state: { addedItems, maxItemsInCart },
  } = useCartStore()
  const values = createQuantityArray(addedItems.length)
  const classes = useStyles()
  const [quantity, setQuantity] = React.useState(values[0])
  const [showDialog, setShowDialog] = React.useState(false)
  const { addToCart } = useCartItems()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(Number(event.target.value))
  }

  const handleClick = () => {
    addToCart(Array(quantity).fill(cartData))
    setShowDialog(true)
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
        <Grid item className={classes.quantity}>
          <OutlinedDropdown
            label="Qty"
            handleChange={handleChange}
            dropdownValues={values}
            inputValue={quantity}
          />
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
      {showDialog && (
        <AddToCartDialog
          data={Array(quantity).fill(cartData)}
          setShowDialog={setShowDialog}
        />
      )}
    </Grid>
  )
}

export default AvailableDisplay
