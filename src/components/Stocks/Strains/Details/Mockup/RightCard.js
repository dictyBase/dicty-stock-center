// @flow
import React, { useState } from "react"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import RightCardBottom from "./RightCardBottom"
import AddToCartButton from "components/Stocks/CatalogPageItems/AddToCartButton"
import useStyles from "./styles"
import { data } from "../mockStrainData"

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const RightCard = () => {
  const [quantity, setQuantity] = useState(values[0])
  const classes = useStyles()

  const handleChange = event => {
    setQuantity(event.target.value)
  }

  return (
    <Grid item xs={2}>
      <Card raised className={classes.rightCard}>
        <Typography variant="h6">Available</Typography>
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
            defaultValue={1}
            inputProps={{ className: classes.textField }}>
            {values.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <AddToCartButton
            data={[
              {
                id: data.id,
                label: data.label,
                summary: data.summary,
              },
            ]}
            setHover={() => {}}
            stockType="strain"
          />
        </div>
      </Card>
      <RightCardBottom />
    </Grid>
  )
}

export default RightCard
