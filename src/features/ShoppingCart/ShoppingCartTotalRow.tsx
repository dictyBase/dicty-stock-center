import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))

type Props = {
  leftValue: string
  numItems: number
  total: string
}

/**
 * ShoppingCartTotalRow displays a single row used inside the total card.
 */
const ShoppingCartTotalRow = ({ leftValue, numItems, total }: Props) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={10}>
        <Typography variant="body1" component="span">
          <strong>{leftValue}</strong> &nbsp;
        </Typography>
        <Typography variant="body2" component="span">
          ({numItems} items):
        </Typography>
      </Grid>
      <Grid item xs={2} container justify="flex-end">
        {total}
      </Grid>
    </Grid>
  )
}

export default ShoppingCartTotalRow
