import React from "react"
import { shallow } from "enzyme"
import ItemDisplay from "./ItemDisplay"
import Grid from "@material-ui/core/Grid"

describe("Stock/ItemDisplay", () => {
  const wrapper = shallow(<ItemDisplay />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(1)
    })
  })
  describe("the rendered Grid", () => {
    it("contains everything else that gets rendered", () => {
      const grids = wrapper.find(Grid)
      // get the outermost div
      const wrappingGrid = grids.first()
      // verify that wrappingDiv contains everything else this component renders
      expect(wrappingGrid.children()).toEqual(wrapper.children())
    })
  })
})
