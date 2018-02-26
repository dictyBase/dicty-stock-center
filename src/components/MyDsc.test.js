import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { MyDsc } from "./MyDsc"

test("matching a snapshot of MyDsc", () => {
  const auth = {
    user: {
      id: 999999,
      name: "Jane Doe",
      email: "janedoe@gmail.com"
    },
    provider: "google"
  }

  const component = renderer.create(
    <BrowserRouter>
      <MyDsc auth={auth} />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
