import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Info from "./Info"

test("matching a snapshot of Info", () => {
  const component = renderer.create(
    <BrowserRouter>
      <Info />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
