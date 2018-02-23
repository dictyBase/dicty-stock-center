import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ShippingInfo from "./ShippingInfo"

test("matching a snapshot of ShippingInfo", () => {
  const shipAccount = {
    value: "Fedex",
    touched: true
  }
  const shipAccountNum = {
    value: "",
    touched: false
  }

  const component = renderer.create(
    <ShippingInfo shipAccount={shipAccount} shipAccountNum={shipAccountNum} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
