// @flow
import React from "react"
import LinkList from "../LinkList"
import { PanelBlue } from "styles"

const downloadLinks = [
  { name: "Phenotype Ontology", to: "", routerAware: true },
  { name: "Strain Characteristics", to: "", routerAware: true },
  { name: "Mutagenesis Methods", to: "", routerAware: true },
  { name: "Plasmid Keywords", to: "", routerAware: true }
]

const Downloads = () => {
  return (
    <PanelBlue>
      <h3>Download / View</h3>
      <LinkList list={downloadLinks} />
    </PanelBlue>
  )
}

export default Downloads
