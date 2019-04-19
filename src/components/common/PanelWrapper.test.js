import React from "react"
import { shallow } from "enzyme"
import PanelWrapper from "./PanelWrapper"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import { Link } from "react-router-dom"

describe("PanelWrapper", () => {
  const props = {
    title: "Latest Gene Ontology Annotations",
    route: "/goannotations",
  }
  const wrapper = shallow(<PanelWrapper {...props}>Example panel</PanelWrapper>)
  const panel = wrapper.dive().find(ExpansionPanel)

  it("always renders one ExpansionPanel component", () => {
    expect(panel.length).toBe(1)
  })

  it("displays the correct text", () => {
    expect(panel.contains("Example panel")).toBe(true)
  })

  it("displays Link due to route prop existing", () => {
    expect(panel.find(Link).length).toBe(1)
  })
})
