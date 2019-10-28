import React from "react"
import { shallow } from "enzyme"
import PaymentMethod from "./PaymentMethod"
import Grid from "@material-ui/core/Grid"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"
import RequiredTextLabel from "../RequiredTextLabel"

describe("OrderForm/Payment/PaymentMethod", () => {
  const props = {
    handleChange: jest.fn(),
    setFieldValue: jest.fn(),
  }
  const wrapper = shallow(<PaymentMethod {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(RequiredTextLabel)).toHaveLength(1)
      expect(wrapper.find(PaymentMethodRadioGroup)).toHaveLength(1)
    })
  })
})
