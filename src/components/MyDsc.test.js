import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { MyDsc } from "./MyDsc"

test("matching a snapshot of MyDsc", () => {
  const user = {
    name: "Jane Doe",
    email: "janedoe@gmail.com"
  }
  const provider = "google"

  const component = renderer.create(
    <BrowserRouter>
      <MyDsc user={user} provider={provider} />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
