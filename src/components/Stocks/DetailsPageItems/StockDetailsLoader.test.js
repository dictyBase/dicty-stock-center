import React from "react"
import { shallow } from "enzyme"
import StockDetailsLoader from "./StockDetailsLoader"
import Skeleton from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"

describe("Stock/StockDetailsLoader", () => {
  const wrapper = shallow(<StockDetailsLoader />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find("h1")).toHaveLength(1)
      expect(wrapper.dive().find(Skeleton)).toHaveLength(3)
      expect(wrapper.dive().find(Grid)).toHaveLength(3)
    })
  })
})
