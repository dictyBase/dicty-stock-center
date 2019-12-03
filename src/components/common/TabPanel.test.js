import React from "react"
import { shallow } from "enzyme"
import TabPanel from "./TabPanel"
import Typography from "@material-ui/core/Typography"

describe("TabPanel", () => {
  const props = {
    value: 0,
    index: 0,
  }
  const wrapper = shallow(<TabPanel {...props}>Example tab panel</TabPanel>)

  it("always renders one Typography component", () => {
    expect(wrapper.find(Typography).length).toBe(1)
  })
  it("displays the correct text", () => {
    expect(wrapper.contains("Example tab panel")).toBe(true)
  })
})
