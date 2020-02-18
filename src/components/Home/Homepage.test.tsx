import React from "react"
import { mount } from "enzyme"
import Homepage from "./Homepage"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { MockAuthProvider } from "utils/testing"

describe("Home/Homepage", () => {
  describe("initial render", () => {
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <Homepage />
      </MockAuthProvider>,
    )
    it("renders loading components first", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(Skeleton)).toExist()
      expect(wrapper.find(SkeletonTheme)).toExist()
    })
  })
})
