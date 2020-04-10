import React from "react"
import { shallow } from "enzyme"
import PlasmidCatalogWrapper from "./PlasmidCatalogWrapper"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"

describe("Stocks/Catalogs/Plasmids/PlasmidCatalogWrapper", () => {
  const wrapper = shallow(<PlasmidCatalogWrapper />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(CatalogProvider)).toHaveLength(1)
      expect(wrapper.find(PlasmidCatalogContainer)).toHaveLength(1)
    })
  })
})
