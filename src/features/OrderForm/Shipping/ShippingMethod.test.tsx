import * as React from "react"
import { shallow } from "enzyme"
import ShippingMethod from "./ShippingMethod"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"

describe("OrderForm/Shipping/ShippingMethod", () => {
  const realUseState = React.useState
  const mockShipAccountState = [true, jest.fn()]
  const mockPrepaidState = [true, jest.fn()]

  describe("initial render", () => {
    const wrapper = shallow(<ShippingMethod />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(TextField)).toHaveLength(1)
      expect(wrapper.find(ShippingMethodRadioGroup)).toHaveLength(1)
    })
  })

  describe("when prepaid notice is true", () => {
    jest
      .spyOn(React, "useState")
      // @ts-ignore
      .mockImplementationOnce(() => realUseState(mockShipAccountState))
      .mockImplementationOnce(() => realUseState(mockPrepaidState))
    const wrapper = shallow(<ShippingMethod />)
    it("should display ShippingMethodPrepaidNotice", () => {
      expect(wrapper.find(ShippingMethodPrepaidNotice)).toHaveLength(1)
    })
  })
})
