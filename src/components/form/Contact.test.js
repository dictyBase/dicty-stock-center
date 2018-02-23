import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Contact from "./Contact"

test("matching a snapshot of Contact", () => {
  const phone = {
    value: "555-5555",
    touched: true
  }

  const component = renderer.create(<Contact phone={phone} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
