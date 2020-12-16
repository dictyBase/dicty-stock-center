import * as React from "react"
import { shallow } from "enzyme"
import ShippingMethod from "./ShippingMethod"
import TextField from "../TextField"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"

describe("OrderForm/Shipping/ShippingMethod", () => {
  describe("initial render", () => {
    const wrapper = shallow(<ShippingMethod />)
    it("always renders initial components", () => {
      expect(wrapper.find(TextField)).toHaveLength(1)
      expect(wrapper.find(ShippingMethodRadioGroup)).toHaveLength(1)
    })
  })

  describe("when prepaid notice is true", () => {
    // @ts-ignore
    React.useState = jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [true, jest.fn()])
      .mockImplementationOnce(() => [true, jest.fn()])
    const wrapper = shallow(<ShippingMethod />)
    it("should display ShippingMethodPrepaidNotice", () => {
      expect(wrapper.find(ShippingMethodPrepaidNotice)).toHaveLength(1)
    })
  })
})
