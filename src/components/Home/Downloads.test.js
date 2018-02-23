import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Downloads from "./Downloads"

test("matching a snapshot of Downloads", () => {
  const component = renderer.create(
    <BrowserRouter>
      <Downloads />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
