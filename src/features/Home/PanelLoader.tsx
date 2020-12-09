import React from "react"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

type Props = {
  /** Number of lines to show in skeleton */
  skeletonCount: number
}

/**
 * PanelLoader is a loading skeleton displayed when homepage
 * panels are loading with GraphQL data.
 */

const PanelLoader = ({ skeletonCount }: Props) => (
  <Grid container justify="center" data-testid="panel-loader">
    <Grid item xs={12}>
      <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
        <Skeleton count={skeletonCount} />
        &nbsp;
      </SkeletonTheme>
    </Grid>
  </Grid>
)

export default PanelLoader
