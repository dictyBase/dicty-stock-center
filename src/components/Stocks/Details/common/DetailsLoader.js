import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  layout: {
    width: "80%",
    margin: "auto",
  },
})

/**
 * DetailsLoader is the loading screen displayed while fetching stock data.
 */

const DetailsLoader = () => {
  const classes = useStyles()

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

export default DetailsLoader
