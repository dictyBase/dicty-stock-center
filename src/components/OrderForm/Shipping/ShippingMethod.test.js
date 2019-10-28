import React from "react"
import { shallow } from "enzyme"
import ShippingMethod from "./ShippingMethod"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"

describe("OrderForm/Shipping/ShippingMethod", () => {
  const props = {
    handleChange: jest.fn(),
    setFieldValue: jest.fn(),
  }
  const wrapper = shallow(<ShippingMethod {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(TextField)).toHaveLength(1)
      expect(wrapper.find(ShippingMethodRadioGroup)).toHaveLength(1)
    })
  })
})
