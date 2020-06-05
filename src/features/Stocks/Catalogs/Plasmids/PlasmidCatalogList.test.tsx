import React from "react"
import { shallow } from "enzyme"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { data } from "./mockPlasmidCatalogData"
import VirtualizedList from "common/components/VirtualizedList"

describe("Stocks/Catalogs/Plasmids/PlasmidCatalogList", () => {
  const props = {
    data: data,
    loadMoreItems: jest.fn(),
  }
  const wrapper = shallow(<PlasmidCatalogList {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(VirtualizedList)).toHaveLength(1)
    })
  })
})
