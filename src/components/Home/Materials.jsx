// @flow
import React from "react"
import LinkList from "../LinkList"
import { PanelGray } from "styles"

const materials = [
  { name: "Strain Catalog", to: "/strains", routerAware: true },
  { name: "Plasmid Catalog", to: "/plasmids", routerAware: true },
  { name: "Bacterial Strains", to: "", routerAware: true },
  { name: "Other Materials", to: "", routerAware: true }
]

const Materials = () => {
  Materials.displayName = "links to stock catalogs"

  return (
    <PanelGray>
      <LinkList list={materials} />
    </PanelGray>
  )
}

export default Materials
