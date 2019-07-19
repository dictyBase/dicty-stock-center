import React from "react"
import { shallow } from "enzyme"
import LeftDisplay from "./LeftDisplay"
import Grid from "@material-ui/core/Grid"

// two options for tests for components that use Material-UI withStyles:
// 1) use dive() for shallow rendering
// 2) use mount instead of shallow
// https://github.com/mui-org/material-ui/issues/9266

describe("LeftDisplay", () => {
  const wrapper = shallow(<LeftDisplay>Strain ID</LeftDisplay>)
  const cell = wrapper.dive().find(Grid)

  it("always renders one Grid component", () => {
    expect(cell.length).toBe(1)
  })

  it("displays the correct title", () => {
    expect(cell.contains("Strain ID")).toBe(true)
  })
})
