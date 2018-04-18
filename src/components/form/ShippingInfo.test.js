import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import ShippingInfo from "./ShippingInfo"
import { shallow } from "enzyme"
import { HelpBlock, FormControl } from "../../styles/Forms"

describe("form/ShippingInfo", () => {
  const shipAccount = { value: "Fedex", touched: true }
  const shipAccountNum = { value: "", touched: false }

  const wrapper = shallow(
    <ShippingInfo shipAccount={shipAccount} shipAccountNum={shipAccountNum} />
  )

  it('should not render shipAccountNum textbox when "call in" option is selected', () => {
    expect(wrapper.containsMatchingElement(<FormControl />)).toEqual(true)

    wrapper.setProps({
      shipAccount: { value: "Will call 1-312-503-4169", touched: true }
    })

    expect(wrapper.containsMatchingElement(<FormControl />)).toEqual(false)
  })

  it("should render validation error messages for shipAccount radio buttons properly", () => {
    const field = { value: "", touched: true, error: "required" }
    wrapper.setProps({ shipAccount: field })
    expect(wrapper.contains(<HelpBlock>{field.error}</HelpBlock>)).toEqual(true)
  })

  it("should render validation error messages for shipAccountNum textbox properly", () => {
    const field = { value: "", touched: true, error: "number required" }
    wrapper.setProps({ shipAccountNum: field })
    expect(wrapper.contains(<HelpBlock>{field.error}</HelpBlock>)).toEqual(true)
  })
})

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
