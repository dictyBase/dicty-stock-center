// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Type of stock */
  stockType: string,
}

/** LeftCardHeader displays the header at the top of the left card on the details
 * page.
 */

const LeftCardHeader = ({ stockType }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.cardHeader}>
      <Typography variant="h6">{stockType} Details</Typography>
    </Grid>
  )
}

export default LeftCardHeader
