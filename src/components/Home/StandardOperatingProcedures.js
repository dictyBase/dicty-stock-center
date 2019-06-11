// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

type Props = {
  /** Material-UI styling */
  classes: {
    panelGray: string,
    sopLink: string,
  },
}

/**
 * StandardOperatingProcedures displays the SOP link (Box PDF).
 */

const StandardOperatingProcedures = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.panelGray}>
      <a
        className={classes.sopLink}
        href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i"
        rel="noopener noreferrer"
        target="_blank">
        Standard Operating Procedures
      </a>
    </div>
  )
}

export default withStyles(styles)(StandardOperatingProcedures)
