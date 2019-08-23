import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import createStyles from "@material-ui/core/styles/createStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "90%",
      margin: "auto",
    },
  })

type Props = {
  /** Material-UI styling */
  classes: {
    layout: string,
  },
}

/**
 * StockDetailsLoader is the loading screen displayed while fetching stock data.
 */

const StockDetailsLoader = (props: Props) => {
  const { classes } = props

  return (
    <Grid container spacing={2} className={classes.layout}>
      <Grid item xs={12}>
        <h1>
          <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
            <Skeleton />
          </SkeletonTheme>
        </h1>
      </Grid>
      <Grid item xs={12}>
        <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
        </SkeletonTheme>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(StockDetailsLoader)
