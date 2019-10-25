import React from "react"
import { shallow } from "enzyme"
import PaymentPage from "./PaymentPage"
import PaymentPageLeftColumn from "./PaymentPageLeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"

describe("OrderForm/Payment/PaymentPage", () => {
  const wrapper = shallow(<PaymentPage />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PaymentPageLeftColumn)).toHaveLength(1)
      expect(wrapper.find(PaymentPageRightColumn)).toHaveLength(1)
    })
  })
})
