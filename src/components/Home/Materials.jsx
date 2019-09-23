// @flow
import React from "react"
import LinkList from "../LinkList"
import { PanelGray } from "styles"

const materials = [
  { name: "Strain Catalog", to: "", routerAware: true },
  { name: "Plasmid Catalog", to: "", routerAware: true },
  { name: "Bacterial Strains", to: "", routerAware: true },
  { name: "Other Materials", to: "", routerAware: true },
]

/**
 * Displays links to catalogs/materials
 */

const Materials = () => {
  return (
    <PanelGray>
      <LinkList list={materials} />
    </PanelGray>
  )
}

export default Materials
