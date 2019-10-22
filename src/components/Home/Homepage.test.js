import React from "react"
import { shallow } from "enzyme"
import { Homepage } from "./Homepage"
import HomepageColumn from "./HomepageColumn"
import Grid from "@material-ui/core/Grid"
import Intro from "./Intro"

describe("Home/Homepage", () => {
  const props = {
    classes: {
      container: "container",
    },
    fullName: "Nathan Fielder",
    user: {},
  }
  const wrapper = shallow(<Homepage {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(HomepageColumn)).toHaveLength(3)
      expect(wrapper.find(Intro)).toHaveLength(1)
    })
  })
})
