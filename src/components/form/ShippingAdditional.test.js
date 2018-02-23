import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ShippingAdditional from "./ShippingAdditional"

test("matching a snapshot of ShippingAdditional", () => {
  const comments = {
    value: undefined
  }
  const placeholder = "placeholder"
  const rows = "20"
  const title = "Testing"

  const component = renderer.create(
    <ShippingAdditional
      rows={rows}
      comments={comments}
      placeholder={placeholder}
      title={title}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
