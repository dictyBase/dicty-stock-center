// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  leftContainer: {
    // backgroundColor: "#e6f2ff",
    fontSize: "1.1em",
    fontWeight: 400,
    padding: "8px 30px 4px 20px",
    verticalAlign: "middle",
    marginBottom: "5px",
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** The content to display on the left */
  children: any,
}

/**
 * This represents the left side of the item display.
 */

const LeftDisplay = ({ classes, children }: Props) => (
  <Grid item xs={12} md={2} className={classes.leftContainer}>
    <strong>{children}</strong>
  </Grid>
)

export default withStyles(styles)(LeftDisplay)
