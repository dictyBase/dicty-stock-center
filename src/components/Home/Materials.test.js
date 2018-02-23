import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Materials from "./Materials"

test("matching a snapshot of Materials", () => {
  const component = renderer.create(
    <BrowserRouter>
      <Materials />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
