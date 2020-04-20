import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "common/utils/testing"
import ShippingPageRightColumn from "./ShippingPageRightColumn"
import OrderFormPanel from "../OrderFormPanel"
import ContinueButton from "../ContinueButton"

describe("OrderForm/Shipping/ShippingPageRightColumn", () => {
  const wrapper = mount(
    <OrderFormWrapper>
      <ShippingPageRightColumn />
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(OrderFormPanel)).toHaveLength(2)
      expect(wrapper.find(ContinueButton)).toHaveLength(1)
    })
  })
})
