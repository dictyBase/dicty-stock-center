import React from "react"
import { shallow } from "enzyme"
import ShippingAddress from "./ShippingAddress"
import PersonalInformation from "./PersonalInformation"
import OrganizationInformation from "./OrganizationInformation"
import AddressInformation from "./AddressInformation"
import ContactInformation from "./ContactInformation"

describe("OrderForm/Shipping/ShippingAddress", () => {
  const props = {
    classes: {
      innerForm: "innerForm",
    },
  }
  const wrapper = shallow(<ShippingAddress {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(PersonalInformation)).toHaveLength(1)
      expect(wrapper.dive().find(OrganizationInformation)).toHaveLength(1)
      expect(wrapper.dive().find(AddressInformation)).toHaveLength(1)
      expect(wrapper.dive().find(ContactInformation)).toHaveLength(1)
    })
  })
})
