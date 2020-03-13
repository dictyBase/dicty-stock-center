import React from "react"
import { shallow } from "enzyme"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"

describe("OrderForm/Shipping/ShippingMethodPrepaidNotice", () => {
  const wrapper = shallow(<ShippingMethodPrepaidNotice />)
  describe("initial render", () => {
    it("contains expected text", () => {
      expect(wrapper.text()).toContain(
        "If using a prepaid shipping label, please send ASAP to dictystocks@northwestern.edu",
      )
    })
  })
})
