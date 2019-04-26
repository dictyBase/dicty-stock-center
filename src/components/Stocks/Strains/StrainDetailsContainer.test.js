import React from "react"
import { shallow } from "enzyme"
import { StrainDetailsContainer } from "./StrainDetailsContainer"
import { Query } from "react-apollo"

// needs coverage for 84,85,87,88,90,93

describe("Stocks/Strains/StrainDetailsContainer", () => {
  const props = {
    match: {
      params: {
        id: "id",
      },
    },
  }
  const wrapper = shallow(<StrainDetailsContainer {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
  })
})
