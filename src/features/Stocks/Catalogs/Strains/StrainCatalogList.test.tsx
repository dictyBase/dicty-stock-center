import React from "react"
import { shallow } from "enzyme"
import StrainCatalogList from "./StrainCatalogList"
import { data } from "./mockStrainCatalogData"
import VirtualizedList from "common/components/VirtualizedList"

describe("Stocks/Catalogs/Strains/StrainCatalogList", () => {
  const props = {
    data: data,
    loadMoreItems: jest.fn(),
  }
  const wrapper = shallow(<StrainCatalogList {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(VirtualizedList)).toHaveLength(1)
    })
  })
})
