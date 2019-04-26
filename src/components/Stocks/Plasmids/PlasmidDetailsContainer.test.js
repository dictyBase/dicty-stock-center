import React from "react"
import { shallow } from "enzyme"
import { PlasmidDetailsContainer } from "./PlasmidDetailsContainer"
import { Query } from "react-apollo"

// needs coverage for 57,58,60,62

describe("Stocks/Plasmids/PlasmidDetailsContainer", () => {
  const props = {
    match: {
      params: {
        id: "id",
      },
    },
  }
  const wrapper = shallow(<PlasmidDetailsContainer {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
  })
})
