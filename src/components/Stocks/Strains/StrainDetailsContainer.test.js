import React from "react"
import { shallow } from "enzyme"
import { StrainDetailsContainer } from "./StrainDetailsContainer"
import { Query } from "react-apollo"

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
