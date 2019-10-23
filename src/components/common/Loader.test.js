import React from "react"
import { shallow } from "enzyme"
import Loader from "./Loader"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"

describe("common/Loader", () => {
  const wrapper = shallow(<Loader />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(SkeletonTheme)).toHaveLength(1)
      expect(wrapper.find(Skeleton)).toHaveLength(4)
    })
  })
})
