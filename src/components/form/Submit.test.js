import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Submit } from "./Submit"

test("matching a snapshot of Submit", () => {
  const editShipping = () => {}
  const editPayment = () => {}
  const addedItems = ["1", "2"]
  const consumer = {
    firstName: "Jane"
  }
  const payer = {
    firstName: "John"
  }
  const component = renderer.create(
    <Submit
      editShipping={editShipping}
      editPayment={editPayment}
      addedItems={addedItems}
      consumer={consumer}
      payer={payer}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
