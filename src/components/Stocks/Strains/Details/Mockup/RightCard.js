// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import RightCardBottom from "./RightCardBottom"
import RightCardTop from "./RightCardTop"

const RightCard = () => (
  <Grid item xs={2}>
    <RightCardTop />
    <RightCardBottom />
  </Grid>
)

export default RightCard
