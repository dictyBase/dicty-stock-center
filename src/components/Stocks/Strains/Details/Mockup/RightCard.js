// @flow
import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RightCardBottom from "./RightCardBottom"
import useStyles from "./styles"

const RightCard = () => {
  const [quantity, setQuantity] = useState(1)
  const classes = useStyles()

  const handleMinusClick = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
  }

  const handlePlusClick = () => {
    quantity === 12 ? setQuantity(12) : setQuantity(quantity + 1)
    // need to add snackbar or something to say no more than 12 items allowed
  }

  return (
    <Grid item xs={2}>
      <Card raised className={classes.rightCard}>
        <Typography variant="h6">Available</Typography>
        <Divider />
        <div className={classes.quantity}>
          <IconButton
            className={classes.minusBtn}
            onClick={handleMinusClick}
            aria-label="minus"
            size="small">
            <FontAwesomeIcon icon="minus" size="sm" />
          </IconButton>
          <TextField
            id="outlined-quantity"
            value={quantity}
            onChange={() => {}}
            margin="dense"
            variant="outlined"
            inputProps={{ className: classes.textField }}
          />
          <IconButton
            className={classes.plusBtn}
            onClick={handlePlusClick}
            size="small"
            aria-label="plus">
            <FontAwesomeIcon icon="plus" size="sm" />
          </IconButton>
        </div>
        <div>
          <IconButton
            className={classes.button}
            color="primary"
            aria-label="add to cart">
            <FontAwesomeIcon icon="cart-plus" size="sm" />
          </IconButton>
        </div>
      </Card>
      <RightCardBottom />
    </Grid>
  )
}

export default RightCard
