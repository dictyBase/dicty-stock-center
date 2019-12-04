// @flow
import React from "react"
import { useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import useStyles from "components/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"

type Props = {
  cartData: {
    id: string,
    name: string,
    summary: string,
    type: string,
  },
}

/**
 * AddToCartButton is the button shown on stock details pages.
 */

const AddToCartButton = ({ cartData }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(cartData))
  }

  return (
    <Button
      className={classes.addToCartBtn}
      onClick={handleClick}
      startIcon={<FontAwesomeIcon icon="cart-plus" size="sm" />}>
      Add to Cart
    </Button>
  )
}

export default AddToCartButton
