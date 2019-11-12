// @flow
import React, { useState } from "react"
import { Link } from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import useStyles from "components/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const values = [...Array(13).keys()].slice(1)

type Props = {
  cartData: {
    id: string,
    label: string,
    summary: string,
  },
  stockType: string,
}

/**
 * AvailableCardDisplay is used on stock details pages if the
 * item is currently available for ordering.
 */

const AvailableCardDisplay = ({ cartData, stockType }: Props) => {
  const [quantity, setQuantity] = useState(values[0])
  const classes = useStyles()

  const handleChange = event => {
    setQuantity(event.target.value)
  }

  return (
    <div>
      <Typography variant="h6" className={classes.cardHeader}>
        <FontAwesomeIcon icon="check" /> Available
      </Typography>
      <Divider />
      <div className={classes.quantity}>
        <TextField
          id="outlined-quantity"
          select
          label="Quantity"
          value={quantity}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          inputProps={{ className: classes.textField }}>
          {values.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <AddToCartButton
          data={Array(quantity).fill(cartData)}
          setHover={() => {}}
          stockType={stockType}
        />
      </div>
      <Divider />
      <Button
        component={Link}
        to="/cart"
        variant="outlined"
        classes={{
          root: classes.checkoutBtn,
        }}
        fullWidth>
        <FontAwesomeIcon
          icon="arrow-right"
          size="sm"
          className={classes.arrowIcon}
        />
        Go to cart
      </Button>
    </div>
  )
}

export default AvailableCardDisplay
