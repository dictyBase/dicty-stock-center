// @flow
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import useStyles from "components/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "./AddToCartButton"
import RemoveFromCartButton from "./RemoveFromCartButton"

type Props = {
  cartData: {
    id: string,
    name: string,
    summary: string,
    type: string,
  },
}

/**
 * AvailableCardDisplay is used on stock details pages if the
 * item is currently available for ordering.
 */

const AvailableCardDisplay = ({ cartData }: Props) => {
  const items = useSelector(state => state.cart.addedItems)
  const classes = useStyles()
  const itemInCart = items.some(item => item.id === cartData.id)

  return (
    <div>
      <Typography variant="h6" className={classes.cardHeader}>
        <FontAwesomeIcon icon="check" /> Available
      </Typography>
      <Divider />
      <div className={classes.cartBtnRow}>
        {itemInCart ? (
          <div>
            <span className={classes.cartNotification}>Item in cart</span>
            <br />
            <RemoveFromCartButton id={cartData.id} />
          </div>
        ) : (
          <AddToCartButton cartData={cartData} />
        )}
      </div>
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
