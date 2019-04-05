// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  leftContainer: {
    backgroundColor: "#e6f2ff",
    fontSize: "1.1em",
    fontWeight: 400,
    padding: "4px 56px 4px 24px",
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      padding: "2px 8px 2px 8px",
      minWidth: 95,
    },
  },
  innerSpan: {
    height: "100%",
    verticalAlign: "middle",
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
  <Grid item xs={2} component="span" className={classes.leftContainer}>
    <span className={classes.innerSpan}>
      <strong>{children}</strong>
    </span>
  </Grid>
)

export default withStyles(styles)(LeftDisplay)
