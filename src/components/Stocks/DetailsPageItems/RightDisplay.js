// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  rightContainer: {
    padding: "8px 56px 4px 24px",
    fontWeight: 400,
    marginBottom: "5px",
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** The content to display on the right */
  children: any,
}

/**
 * RightDisplay represents the right side of a list display.
 * It acts as a wrapper around whatever children it receives.
 */

const RightDisplay = ({ classes, children }: Props) => (
  <Grid item xs={12} md={4} className={classes.rightContainer}>
    {children}
  </Grid>
)

export default withStyles(styles)(RightDisplay)
