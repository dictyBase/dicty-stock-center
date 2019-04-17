// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

type Props = {
  /** Material-UI styling */
  classes: {
    panelGray: string,
  },
}

/**
 * Availability fetches and displays the current availability of strains and plasmids.
 */

const Availability = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.panelGray}>
      <h4>Strain & Plasmid Availability</h4>
      <h5>
        <strong>1927</strong> Strains
      </h5>
      <h5>
        <strong>882</strong> Plasmids
      </h5>
    </div>
  )
}

export default withStyles(styles)(Availability)
