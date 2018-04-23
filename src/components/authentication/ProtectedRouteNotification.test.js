import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ProtectedRouteNotification from "./ProtectedRouteNotification"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ProtectedRouteNotification />, div)
})

test("matching a snapshot of ProtectedRouteNotification", () => {
  const component = renderer.create(<ProtectedRouteNotification />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
