import React from "react"
import { shallow } from "enzyme"
import PhenotypeList from "./PhenotypeList"
import VirtualizedList from "common/components/VirtualizedList"

describe("Stocks/SearchResults/PhenotypeList", () => {
  const props = {
    data: [],
    loadMoreItems: jest.fn(),
    phenotype: "abolished protein phosphorylation",
    hasMore: true,
  }
  const wrapper = shallow(<PhenotypeList {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(VirtualizedList)).toHaveLength(1)
    })
  })
})
