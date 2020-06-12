import React from "react"
import { Link } from "react-router-dom"
import useStyles from "features/Stocks/Details/styles"

const CartCapacityFullMessage = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.maxItems}>Cart capacity is full</div>
      <div className={classes.moreInfoText}>
        For more information, visit the{" "}
        <Link to="/information/order">Ordering Information page</Link>.
      </div>
    </div>
  )
}

export default CartCapacityFullMessage
