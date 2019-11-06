// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Type of stock */
  type: string,
}

/** StockDetailsCardHeader displays the header at the top of the details
 * card/paper.
 */

const StockDetailsCardHeader = ({ type }: Props) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={classes.header}>
        <h3>{type} Details</h3>
      </Grid>
    </Grid>
  )
}

export default StockDetailsCardHeader
