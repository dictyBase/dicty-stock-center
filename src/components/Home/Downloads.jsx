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
      <LinkList list={downloadLinks} title="Download / View" />
    </PanelBlue>
  )
}

export default Downloads
