import React from "react"
import { shallow } from "enzyme"
import "../../setupTests"
import StrainDetailsLoader from "./StrainDetailsLoader"
import Skeleton from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"

describe("Strain/StrainDetailsLoader", () => {
  const wrapper = shallow(<StrainDetailsLoader />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders one <h1> element", () => {
      expect(wrapper.dive().find("h1")).toHaveLength(1)
    })
    it("always renders four <Skeleton> elements", () => {
      expect(wrapper.dive().find(Skeleton)).toHaveLength(4)
    })
    it("always renders three <Grid> elements", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(3)
    })
  })
})
