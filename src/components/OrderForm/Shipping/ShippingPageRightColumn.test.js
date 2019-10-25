import React from "react"
import { shallow } from "enzyme"
import ShippingPageRightColumn from "./ShippingPageRightColumn"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"

describe("OrderForm/Shipping/ShippingPageRightColumn", () => {
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
    pageNum: 0,
    setPageNum: jest.fn(),
  }
  const wrapper = shallow(<ShippingPageRightColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(2)
      expect(wrapper.find(ShippingMethod)).toHaveLength(1)
      expect(wrapper.find(AdditionalInformation)).toHaveLength(1)
      expect(wrapper.find(ContinueButton)).toHaveLength(1)
    })
  })
})
