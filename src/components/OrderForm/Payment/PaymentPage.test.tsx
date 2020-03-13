import React from "react"
import { shallow } from "enzyme"
import PaymentPage from "./PaymentPage"
import LeftColumn from "../LeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"

describe("OrderForm/Payment/PaymentPage", () => {
  const wrapper = shallow(<PaymentPage />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LeftColumn)).toHaveLength(1)
      expect(wrapper.find(PaymentPageRightColumn)).toHaveLength(1)
    })
  })
})
