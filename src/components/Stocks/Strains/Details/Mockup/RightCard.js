// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"
// import CardHeader from "@material-ui/core/CardHeader"
// import CardMedia from "@material-ui/core/CardMedia"
// import CardContent from "@material-ui/core/CardContent"
// import CardActions from "@material-ui/core/CardActions"
import TextField from "@material-ui/core/TextField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RightCardBottom from "./RightCardBottom"
import useStyles from "./styles"

const RightCard = () => {
  const classes = useStyles()

  return (
    <Grid item xs={2}>
      <Card raised className={classes.rightCard}>
        <Typography variant="h6">Available</Typography>
        <div className={classes.quantity}>
          <IconButton className={classes.button} aria-label="minus">
            <FontAwesomeIcon icon="minus" size="sm" />
          </IconButton>
          <TextField
            id="outlined-quantity"
            label="Quantity"
            className={classes.textField}
            value={1}
            onChange={() => {}}
            margin="normal"
            variant="outlined"
          />
          <IconButton className={classes.button} aria-label="plus">
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
