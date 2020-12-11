import React from "react"
import { Link } from "react-router-dom"
import useStyles from "features/Stocks/Details/styles"

/**
 * CartCapacityFullMessage displays on details pages when the maximum
 * amount of items is in the cart.
 */

const CartCapacityFullMessage = () => {
  const classes = useStyles()

  return (
    <Link to="/information/order" className={classes.maxItems}>
      Cart capacity is full
    </Link>
  )
}

export default CartCapacityFullMessage
