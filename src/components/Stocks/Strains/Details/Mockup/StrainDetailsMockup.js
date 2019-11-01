// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"

const StrainDetailsMockup = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <LeftCard />
      <RightCard />
    </Grid>
  )
}

export default StrainDetailsMockup
