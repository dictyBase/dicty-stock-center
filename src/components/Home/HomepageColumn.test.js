import React from "react"
import { shallow } from "enzyme"
import HomepageColumn from "./HomepageColumn"
import Grid from "@material-ui/core/Grid"
import About from "./About"
import MiscLinks from "./MiscLinks"

describe("Home/HomepageColumn", () => {
  const wrapper = shallow(
    <HomepageColumn components={[<About />, <MiscLinks />]} />,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(About)).toHaveLength(1)
      expect(wrapper.find(MiscLinks)).toHaveLength(1)
    })
  })
})
