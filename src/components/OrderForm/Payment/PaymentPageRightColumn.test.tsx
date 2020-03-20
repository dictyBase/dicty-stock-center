import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
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
      <PaymentPageRightColumn {...props} />
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
