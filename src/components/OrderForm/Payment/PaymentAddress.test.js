import React from "react"
import { shallow } from "enzyme"
import PaymentAddress from "./PaymentAddress"
import PaymentPersonalInformation from "./PaymentPersonalInformation"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import PaymentAddressInformation from "./PaymentAddressInformation"
import PaymentContactInformation from "./PaymentContactInformation"

describe("OrderForm/Payment/PaymentAddress", () => {
  const props = {
    classes: {
      innerForm: "innerForm",
    },
  }
  const wrapper = shallow(<PaymentAddress {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(PaymentPersonalInformation)).toHaveLength(1)
      expect(wrapper.dive().find(PaymentOrganizationInformation)).toHaveLength(
        1,
      )
      expect(wrapper.dive().find(PaymentAddressInformation)).toHaveLength(1)
      expect(wrapper.dive().find(PaymentContactInformation)).toHaveLength(1)
    })
  })
})
