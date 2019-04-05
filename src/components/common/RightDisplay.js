// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  rightContainer: {
    width: "80%",
    height: "100%",
    padding: "4px 56px 4px 24px",
    verticalAlign: "middle",
  },
  innerSpan: {
    height: "100%",
    fontSize: "0.8125rem",
    fontWeight: 400,
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
  <Grid item xs={4} component="span" className={classes.rightContainer}>
    <span className={classes.innerSpan}>{children}</span>
  </Grid>
)

export default withStyles(styles)(RightDisplay)
