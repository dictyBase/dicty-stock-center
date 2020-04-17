import React from "react"
import { shallow } from "enzyme"
import OrderForm from "./OrderForm"
import { Helmet } from "react-helmet"
import ShippingPage from "./Shipping/ShippingPage"

describe("OrderForm/OrderForm", () => {
  describe("initial render", () => {
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(ShippingPage)).toHaveLength(1)
    })
  })
})
