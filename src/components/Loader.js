import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"
import { Container } from "styles"

const Loader = () => (
  <Container>
    <Grid container justify="center">
      <Grid item xs={12}>
        <SkeletonTheme color="#fff	" highlightColor="#fff">
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={5} />
        </SkeletonTheme>
      </Grid>
    </Grid>
  </Container>
)

export default Loader
