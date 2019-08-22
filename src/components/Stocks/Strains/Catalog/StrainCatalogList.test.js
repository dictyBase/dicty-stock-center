import React from "react"
import { shallow } from "enzyme"
import StrainCatalogList from "./StrainCatalogList"
import { data } from "./mockStrainCatalogData"
import AutoSizer from "react-virtualized-auto-sizer"
import Paper from "@material-ui/core/Paper"
import StrainCatalogListHeader from "components/Stocks/Strains/Catalog/StrainCatalogListHeader"

describe("Stocks/Strains/StrainCatalogList", () => {
  const props = {
    data: data,
    classes: {},
  }
  const wrapper = shallow(<StrainCatalogList {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogListHeader)).toHaveLength(1)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
  })
})
