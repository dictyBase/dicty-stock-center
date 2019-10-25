import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import PaymentPageRightColumn from "./PaymentPageRightColumn"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"

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
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(PaymentMethod)).toHaveLength(1)
      expect(wrapper.find(PaymentInfoBox)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
  describe("clicking previous button", () => {
    it("should update page number on click", () => {
      // reset spy
      setPageNumSpy.resetHistory()
      const btn = wrapper.find(Button).first()
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
  describe("clicking continue button", () => {
    it("should update page number on click", () => {
      // reset spy
      setPageNumSpy.resetHistory()
      const btn = wrapper.find(Button).at(1)
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
