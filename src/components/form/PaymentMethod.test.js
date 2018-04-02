import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import PaymentMethod from "./PaymentMethod"
import PaymentInfo from "./PaymentInfo"
import { shallow } from "enzyme"

describe("form/PaymentMethod", () => {
  const payMethod = { value: "credit", touched: true }
  const poNum = { value: "", touched: false }
  const title = "Method"

  const wrapper = shallow(
    <PaymentMethod payMethod={payMethod} poNum={poNum} title={title} />
  )

  it("should render <PaymentInfo>", () => {
    expect(
      wrapper.contains(<PaymentInfo payMethod={payMethod} poNum={poNum} />)
    ).toEqual(true)
  })
})

test("matching a snapshot of PaymentMethod", () => {
  const payMethod = {
    value: "Credit",
    touched: true
  }
  const poNum = {
    value: "",
    touched: true
  }
  const title = "Method"

  const component = renderer.create(
    <PaymentMethod payMethod={payMethod} poNum={poNum} title={title} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
