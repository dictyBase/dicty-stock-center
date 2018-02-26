import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { BrowserRouter } from "react-router-dom"
import { Error } from "./Error"

test("matching a snapshot of Error", () => {
  const auth = {
    error: "404"
  }
  const order = {
    error: "404"
  }
  const page = {
    error: "404"
  }

  const component = renderer.create(
    <BrowserRouter>
      <Error auth={auth} order={order} page={page} />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
