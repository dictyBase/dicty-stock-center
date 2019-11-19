import React from "react"
import { shallow } from "enzyme"
import StrainCatalogWrapper from "./StrainCatalogWrapper"
import StrainCatalogContainer from "./StrainCatalogContainer"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"

describe("Stocks/Catalogs/Strains/StrainCatalogWrapper", () => {
  const wrapper = shallow(<StrainCatalogWrapper />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(CatalogProvider)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogContainer)).toHaveLength(1)
    })
  })
})
