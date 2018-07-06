import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import "../../setupTests"
import ShippingMethod from "./ShippingMethod"
import ShippingInfo from "./ShippingInfo"
import { shallow } from "enzyme"

describe("form/ShippingMethod", () => {
  const shipAccount = { value: "ups", touched: true }
  const shipAccountNum = { value: "6262", touched: true }
  const title = "Method"

  const wrapper = shallow(
    <ShippingMethod
      shipAccount={shipAccount}
      shipAccountNum={shipAccountNum}
      title={title}
    />,
  )

  it("should render <ShippingInfo>", () => {
    expect(
      wrapper.contains(
        <ShippingInfo
          shipAccount={shipAccount}
          shipAccountNum={shipAccountNum}
        />,
      ),
    ).toEqual(true)
  })
})

test("matching a snapshot of ShippingMethod", () => {
  const shipAccount = {
    value: "Fedex",
    touched: true,
  }
  const shipAccountNum = {
    value: "",
    touched: false,
  }
  const title = "Method"

  const component = renderer.create(
    <ShippingMethod
      shipAccount={shipAccount}
      shipAccountNum={shipAccountNum}
      title={title}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
