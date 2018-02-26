import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import TableLoader from "./TableLoader"

test("matching a snapshot of TableLoader", () => {
  const component = renderer.create(<TableLoader />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
