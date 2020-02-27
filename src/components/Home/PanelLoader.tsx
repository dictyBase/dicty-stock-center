import React from "react"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

type Props = {
  skeletonCount: number
}

/**
 * PanelLoader is a loading skeleton displayed when homepage
 * panels are loading with GraphQL data.
 */

const PanelLoader = ({ skeletonCount }: Props) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
        <Skeleton count={skeletonCount} />
        &nbsp;
      </SkeletonTheme>
    </Grid>
  </Grid>
)

export default PanelLoader
