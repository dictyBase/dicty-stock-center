import React from "react"
import { shallow } from "enzyme"
import ShippingAddress from "./ShippingAddress"
import PersonalInformation from "./PersonalInformation"
import OrganizationInformation from "./OrganizationInformation"
import AddressInformation from "./AddressInformation"
import ContactInformation from "./ContactInformation"

describe("OrderForm/Shipping/ShippingAddress", () => {
  const wrapper = shallow(<ShippingAddress />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(PersonalInformation)).toHaveLength(1)
      expect(wrapper.find(OrganizationInformation)).toHaveLength(1)
      expect(wrapper.find(AddressInformation)).toHaveLength(1)
      expect(wrapper.find(ContactInformation)).toHaveLength(1)
    })
  })
})
