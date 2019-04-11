import React from "react"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"
import PlasmidDetailsContainer from "./PlasmidDetailsContainer"

describe("Stocks/Plasmids/PlasmidDetailsContainer", () => {
  const wrapper = shallow(
    <Router>
      <PlasmidDetailsContainer />
    </Router>,
  )
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
  })
})
