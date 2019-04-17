import React from "react"
import { shallow } from "enzyme"
import PlasmidDetailsList from "./PlasmidDetailsList"
import ItemDisplay from "../ItemDisplay"
import LeftDisplay from "../LeftDisplay"
import RightDisplay from "../RightDisplay"
import Grid from "@material-ui/core/Grid"
import { data } from "./mockPlasmidData"

describe("Stocks/Plasmids/PlasmidDetailsList", () => {
  const wrapper = shallow(<PlasmidDetailsList data={data} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(6)
      expect(wrapper.dive().find(ItemDisplay)).toHaveLength(7)
      expect(wrapper.dive().find(LeftDisplay)).toHaveLength(10)
      expect(wrapper.dive().find(RightDisplay)).toHaveLength(6)
    })
  })
})
