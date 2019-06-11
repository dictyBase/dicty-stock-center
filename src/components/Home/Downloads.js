// @flow
import React from "react"
import LinkList from "../LinkList"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

const downloadLinks = [
  {
    name: "Phenotype Ontology",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_phenotypes.obo",
    routerAware: false,
  },
  {
    name: "Strain Characteristics",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_strain_characteristics.obo",
    routerAware: false,
  },
  {
    name: "Mutagenesis Methods",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_mutagenesis_method.obo",
    routerAware: false,
  },
  {
    name: "Plasmid Keywords",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_plasmid_keywords.obo",
    routerAware: false,
  },
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
