import React from "react"
import { shallow } from "enzyme"
import { StrainCatalogContainer } from "./StrainCatalogContainer"
import { Query } from "react-apollo"

// needs coverage for 51,52,54

describe("Stocks/Strains/StrainCatalogContainer", () => {
  const wrapper = shallow(<StrainCatalogContainer />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
  })
})
