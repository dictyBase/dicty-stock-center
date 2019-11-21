// @flow
import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import useStyles from "components/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "./AddToCartButton"

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
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h6" className={classes.cardHeader}>
        <FontAwesomeIcon icon="check" /> Available
      </Typography>
      <Divider />
      <div className={classes.quantity}>
        <AddToCartButton cartData={cartData} />
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
