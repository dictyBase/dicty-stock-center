import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ErrorNotification from "./ErrorNotification"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ErrorNotification />, div)
})

test("matching a snapshot of ErrorNotification", () => {
  const component = renderer.create(<ErrorNotification />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
