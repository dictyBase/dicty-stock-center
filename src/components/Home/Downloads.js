// @flow
import React from "react"
import LinkList from "../LinkList"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

const downloadLinks = [
  { name: "Phenotype Ontology", to: "", routerAware: true },
  { name: "Strain Characteristics", to: "", routerAware: true },
  { name: "Mutagenesis Methods", to: "", routerAware: true },
  { name: "Plasmid Keywords", to: "", routerAware: true },
]

type Props = {
  /** Material-UI styling */
  classes: {
    panelGray: string,
  },
}

/**
 * Downloads displays download links on the homepage.
 */

const Downloads = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.panelGray}>
      <h3>Download / View</h3>
      <LinkList list={downloadLinks} />
    </div>
  )
}

export default withStyles(styles)(Downloads)
