import React, { Component } from "react"
import LinkList from "../LinkList"
import { PanelBlue } from "styles"

export default class Downloads extends Component {
  displayName = "downloads links"
  render() {
    const downloads = [
      { name: "Phenotype Ontology", to: "", routerAware: true },
      { name: "Strain Characteristics", to: "", routerAware: true },
      { name: "Mutagenesis Methods", to: "", routerAware: true },
      { name: "Plasmid Keywords", to: "", routerAware: true }
    ]
    return (
      <PanelBlue>
        <LinkList list={downloads} title="Download / View" />
      </PanelBlue>
    )
  }
}
