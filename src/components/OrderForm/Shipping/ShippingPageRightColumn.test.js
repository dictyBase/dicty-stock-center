import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import ShippingPageRightColumn from "./ShippingPageRightColumn"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"

describe("OrderForm/Shipping/ShippingPageRightColumn", () => {
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
      shippingAccountNumber: "999",
    },
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<ShippingPageRightColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(2)
      expect(wrapper.find(ShippingMethod)).toHaveLength(1)
      expect(wrapper.find(AdditionalInformation)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("clicking continue button", () => {
    it("should update page number on click", () => {
      const btn = wrapper.find(Button)
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
