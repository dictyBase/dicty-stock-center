import React from "react"
import { shallow } from "enzyme"
import PaymentInfoBoxItems from "./PaymentInfoBoxItems"

describe("OrderForm/Payment/PaymentInfoBoxItems", () => {
  const wrapper = shallow(<PaymentInfoBoxItems />)
  describe("initial render", () => {
    it("always renders expected payment options", () => {
      expect(wrapper.text()).toContain("Credit Card")
      expect(wrapper.text()).toContain("Wire Transfer")
      expect(wrapper.text()).toContain("PO")
    })
  })
})
