import React from "react"
import { shallow } from "enzyme"
import ShippingPage from "./ShippingPage"
import ShippingPageLeftColumn from "./ShippingPageLeftColumn"
import ShippingPageRightColumn from "./ShippingPageRightColumn"

describe("OrderForm/Shipping/ShippingPage", () => {
  const wrapper = shallow(<ShippingPage />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ShippingPageLeftColumn)).toHaveLength(1)
      expect(wrapper.find(ShippingPageRightColumn)).toHaveLength(1)
    })
  })
})
