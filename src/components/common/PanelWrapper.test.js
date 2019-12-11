import React from "react"
import { shallow } from "enzyme"
import PanelWrapper from "./PanelWrapper"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"

describe("PanelWrapper", () => {
  const props = {
    title: "Shipping Address Information",
  }
  const wrapper = shallow(<PanelWrapper {...props}>Example panel</PanelWrapper>)
  const panel = wrapper.find(ExpansionPanel)

  it("always renders one ExpansionPanel component", () => {
    expect(panel.length).toBe(1)
  })
  it("displays the correct text", () => {
    expect(panel.contains("Example panel")).toBe(true)
  })
})
