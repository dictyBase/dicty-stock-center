import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import { BrowserRouter } from "react-router-dom"
import PaymentPageRightColumn from "./PaymentPageRightColumn"
import OrderFormPanel from "../OrderFormPanel"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"

describe("OrderForm/Payment/PaymentPageRightColumn", () => {
  const props = {
    pageNum: 2,
    setPageNum: jest.fn(),
  }
  const wrapper = mount(
    <OrderFormWrapper>
      <BrowserRouter>
        <PaymentPageRightColumn {...props} />
      </BrowserRouter>
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(OrderFormPanel)).toHaveLength(1)
      expect(wrapper.find(PaymentInfoBox)).toHaveLength(1)
      expect(wrapper.find(BackButton)).toHaveLength(1)
      expect(wrapper.find(ContinueButton)).toHaveLength(1)
    })
  })
})
