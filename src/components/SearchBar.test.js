import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import SearchBar from "./SearchBar"

test("matching a snapshot of SearchBar", () => {
  const component = renderer.create(<SearchBar />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
