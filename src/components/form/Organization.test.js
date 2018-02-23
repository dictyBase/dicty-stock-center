import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Organization from "./Organization"

test("matching a snapshot of Organization", () => {
  const org = {
    value: "Northwestern",
    touched: true
  }
  const group = {
    value: "dictyBase",
    touched: true
  }

  const component = renderer.create(<Organization org={org} group={group} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
