import React from "react"
import "jest-styled-components"
import "../../setupTests"
import PaymentMethod from "./PaymentMethod"
import PaymentInfo from "./PaymentInfo"
import { shallow } from "enzyme"

describe("form/PaymentMethod", () => {
  const payMethod = { value: "credit", touched: true }
  const poNum = { value: "", touched: false }
  const title = "Method"

  const wrapper = shallow(
    <PaymentMethod payMethod={payMethod} poNum={poNum} title={title} />,
  )

  it("should render <PaymentInfo>", () => {
    expect(
      wrapper.contains(<PaymentInfo payMethod={payMethod} poNum={poNum} />),
    ).toEqual(true)
  })
})
