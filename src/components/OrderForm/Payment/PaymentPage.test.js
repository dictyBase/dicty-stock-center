import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import PaymentPage from "./PaymentPage"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentAddress from "./PaymentAddress"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"

// still need to find a way to test validationChecker()

describe("OrderForm/Payment/PaymentPage", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    values: {
      payerFirstName: "john",
      payerLastName: "doe",
      payerEmail: "johndoe@test.com",
      payerOrganization: "northwestern",
      payerLab: "dictybase",
      payerAddress1: "123 fake st",
      payerCity: "chicago",
      payerZip: "60601",
      payerCountry: "usa",
      payerPhone: "1234567890",
      purchaseOrderNum: "999",
    },
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<PaymentPage {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(10)
      expect(wrapper.find(PanelWrapper)).toHaveLength(2)
      expect(wrapper.find(PaymentAddress)).toHaveLength(1)
      expect(wrapper.find(PaymentMethod)).toHaveLength(1)
      expect(wrapper.find(PaymentInfoBox)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
    })
  })
  describe("clicking previous button", () => {
    it("should update page number on click", () => {
      // reset spy
      setPageNumSpy.resetHistory()
      const btn = wrapper
        .dive()
        .find(Button)
        .first()
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
  describe("clicking continue button", () => {
    it("should update page number on click", () => {
      // reset spy
      setPageNumSpy.resetHistory()
      const btn = wrapper
        .dive()
        .find(Button)
        .at(1)
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
