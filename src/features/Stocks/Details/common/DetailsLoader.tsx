import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"

/**
 * DetailsLoader is the loading screen displayed while fetching stock data.
 */

const DetailsLoader = () => (
  <Grid container spacing={2} data-testid="skeleton-loader">
    <Grid item xs={12}>
      <h1>
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DCDCDC">
          <Skeleton />
        </SkeletonTheme>
      </h1>
    </Grid>
    <Grid item xs={12}>
      <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DCDCDC">
        <Skeleton count={10} />
        <br />
        <br />
        <Skeleton count={10} />
      </SkeletonTheme>
    </Grid>
  </Grid>
)

export default DetailsLoader
