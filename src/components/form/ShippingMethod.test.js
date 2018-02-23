import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ShippingMethod from "./ShippingMethod"

test("matching a snapshot of ShippingMethod", () => {
  const shipAccount = {
    value: "Fedex",
    touched: true
  }
  const shipAccountNum = {
    value: "",
    touched: false
  }
  const title = "Method"

  const component = renderer.create(
    <ShippingMethod
      shipAccount={shipAccount}
      shipAccountNum={shipAccountNum}
      title={title}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
