import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "common/utils/testing"
import { BrowserRouter } from "react-router-dom"
import PaymentPage from "./PaymentPage"
import LeftColumn from "../LeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"

describe("OrderForm/Payment/PaymentPage", () => {
  const wrapper = mount(
    <OrderFormWrapper>
      <BrowserRouter>
        <PaymentPage pageNum={2} setPageNum={jest.fn()} />
      </BrowserRouter>
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LeftColumn)).toHaveLength(1)
      expect(wrapper.find(PaymentPageRightColumn)).toHaveLength(1)
    })
  })
})
