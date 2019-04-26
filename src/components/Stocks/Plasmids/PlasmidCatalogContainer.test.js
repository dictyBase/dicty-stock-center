import React from "react"
import { shallow } from "enzyme"
import { PlasmidCatalogContainer } from "./PlasmidCatalogContainer"
import { Query } from "react-apollo"

// needs coverage for 51,52,54

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
  const wrapper = shallow(<PlasmidCatalogContainer />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
  })
})
