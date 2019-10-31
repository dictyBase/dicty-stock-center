// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
// import useStyles from "./styles"

const Bottom = () => (
  // const classes = useStyles()

  <Grid item xs={12}>
    <Button color="primary">Previous Strain</Button>
    <Button color="secondary">Next Strain</Button>
  </Grid>
)

export default Bottom
