import React from "react"
import { shallow } from "enzyme"
import RightDisplay from "./RightDisplay"
import Grid from "@material-ui/core/Grid"

// two options for tests for components that use Material-UI withStyles:
// 1) use dive() for shallow rendering
// 2) use mount instead of shallow
// https://github.com/mui-org/material-ui/issues/9266

describe("RightDisplay", () => {
  const wrapper = shallow(<RightDisplay>DBS0264513</RightDisplay>)
  const cell = wrapper.dive().find(Grid)

  it("always renders one Grid component", () => {
    expect(cell.length).toBe(1)
  })

  it("displays the correct data", () => {
    expect(cell.contains("DBS0264513")).toBe(true)
  })
})
