// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  container: {
    // border: "1px dotted #cce6ff",
    // height: "48px",
  },
})

/**
 * ItemDisplay is a wrapper component for each item inside stock details row
 */

const ItemDisplay = ({ children, classes }) => (
  <Grid container alignItems="center" className={classes.container}>
    {children}
  </Grid>
)

export default withStyles(styles)(ItemDisplay)
