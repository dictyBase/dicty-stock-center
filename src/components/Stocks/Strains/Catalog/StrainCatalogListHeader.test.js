import React from "react"
import { shallow } from "enzyme"
import StrainCatalogListHeader from "./StrainCatalogListHeader"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

describe("Stocks/Strains/Catalog/StrainCatalogListHeader", () => {
  const wrapper = shallow(<StrainCatalogListHeader />)
  describe("initial render", () => {
    it("always renders expected payment options", () => {
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(Hidden)).toHaveLength(3)
    })
  })
})
