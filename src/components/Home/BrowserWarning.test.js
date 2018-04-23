import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import BrowserWarning from "./BrowserWarning"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<BrowserWarning />, div)
})

test("matching a snapshot of BrowserWarning", () => {
  const component = renderer.create(<BrowserWarning />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
