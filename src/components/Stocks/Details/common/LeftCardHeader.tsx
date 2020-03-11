import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Type of stock */
  stockType: string
  /** Strain species */
  species: string
}

/** LeftCardHeader displays the header at the top of the left card on the details
 * page.
 */

const LeftCardHeader = ({ stockType, species }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.cardHeader}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">{stockType} Details</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{species}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LeftCardHeader
