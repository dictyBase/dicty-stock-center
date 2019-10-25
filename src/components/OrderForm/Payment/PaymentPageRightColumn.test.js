import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import PaymentPageRightColumn from "./PaymentPageRightColumn"
import OrderFormPanel from "../OrderFormPanel"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"

describe("OrderForm/Payment/PaymentPageRightColumn", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    values: {
      firstName: "john",
      lastName: "doe",
      email: "johndoe@test.com",
      organization: "northwestern",
      lab: "dictybase",
      address1: "123 fake st",
      city: "chicago",
      zip: "60601",
      country: "usa",
      phone: "1234567890",
      PaymentAccountNumber: "999",
    },
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<PaymentPageRightColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(OrderFormPanel)).toHaveLength(1)
      expect(wrapper.find(PaymentInfoBox)).toHaveLength(1)
      expect(wrapper.find(BackButton)).toHaveLength(1)
      expect(wrapper.find(ContinueButton)).toHaveLength(1)
    })
  })
})
