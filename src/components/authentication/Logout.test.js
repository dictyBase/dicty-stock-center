import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Logout } from "./Logout"

const logoutUser = () => {}

test("matching a snapshot of Logout", () => {
  const component = renderer.create(
    <BrowserRouter>
      <Logout logoutUser={logoutUser} />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
