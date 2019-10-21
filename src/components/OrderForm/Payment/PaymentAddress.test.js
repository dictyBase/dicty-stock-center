import React from "react"
import { shallow } from "enzyme"
import PaymentAddress from "./PaymentAddress"
import PaymentPersonalInformation from "./PaymentPersonalInformation"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import PaymentAddressInformation from "./PaymentAddressInformation"
import PaymentContactInformation from "./PaymentContactInformation"

describe("OrderForm/Payment/PaymentAddress", () => {
  const wrapper = shallow(<PaymentAddress />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PaymentPersonalInformation)).toHaveLength(1)
      expect(wrapper.find(PaymentOrganizationInformation)).toHaveLength(1)
      expect(wrapper.find(PaymentAddressInformation)).toHaveLength(1)
      expect(wrapper.find(PaymentContactInformation)).toHaveLength(1)
    })
  })
})
