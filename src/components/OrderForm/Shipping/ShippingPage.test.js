import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import ShippingPage from "./ShippingPage"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingAddress from "./ShippingAddress"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"

describe("OrderForm/Shipping/ShippingPage", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    classes: {},
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
  const wrapper = shallow(<ShippingPage {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(8)
      expect(wrapper.dive().find(PanelWrapper)).toHaveLength(3)
      expect(wrapper.dive().find(ShippingAddress)).toHaveLength(1)
      expect(wrapper.dive().find(ShippingMethod)).toHaveLength(1)
      expect(wrapper.dive().find(AdditionalInformation)).toHaveLength(1)
      expect(wrapper.dive().find(Button)).toHaveLength(1)
    })
  })
  describe("clicking continue button", () => {
    it("should update page number on click", () => {
      const btn = wrapper.dive().find(Button)
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
