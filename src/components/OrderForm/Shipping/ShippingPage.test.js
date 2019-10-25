import React from "react"
import { shallow } from "enzyme"
import ShippingPage from "./ShippingPage"
import LeftColumn from "../LeftColumn"
import ShippingPageRightColumn from "./ShippingPageRightColumn"

describe("OrderForm/Shipping/ShippingPage", () => {
  const wrapper = shallow(<ShippingPage />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LeftColumn)).toHaveLength(1)
      expect(wrapper.find(ShippingPageRightColumn)).toHaveLength(1)
    })
  })
})
