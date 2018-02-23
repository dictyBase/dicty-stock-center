import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Personal from "./Personal"

test("matching a snapshot of Personal", () => {
  const firstName = {
    value: "Jane",
    touched: true
  }
  const lastName = {
    value: "Doe",
    touched: true
  }
  const email = {
    value: "janedoe@gmail.com",
    touched: true
  }

  const component = renderer.create(
    <Personal firstName={firstName} lastName={lastName} email={email} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
