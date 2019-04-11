import React from "react"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"
import StrainDetailsContainer from "./StrainDetailsContainer"

describe("Stocks/Strains/StrainDetailsContainer", () => {
  const wrapper = shallow(
    <Router>
      <StrainDetailsContainer />
    </Router>,
  )
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
  })
})
