import React from "react"
import { shallow } from "enzyme"
import DetailsLoader from "./DetailsLoader"
import Skeleton from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"

describe("Stock/DetailsLoader", () => {
  const wrapper = shallow(<DetailsLoader />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Skeleton)).toHaveLength(3)
      expect(wrapper.find(Grid)).toHaveLength(3)
    })
  })
})
