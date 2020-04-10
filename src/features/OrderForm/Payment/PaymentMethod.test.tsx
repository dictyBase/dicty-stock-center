import * as React from "react"
import { shallow } from "enzyme"
import PaymentMethod from "./PaymentMethod"
import Grid from "@material-ui/core/Grid"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"
import RequiredTextLabel from "../RequiredTextLabel"
import TextField from "../TextField"

describe("OrderForm/Payment/PaymentMethod", () => {
  const realUseState = React.useState
  const mockState = [true, jest.fn()]

  describe("initial render", () => {
    const wrapper = shallow(<PaymentMethod />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(RequiredTextLabel)).toHaveLength(1)
      expect(wrapper.find(PaymentMethodRadioGroup)).toHaveLength(1)
      expect(wrapper.find(TextField)).toHaveLength(0)
    })
  })

  describe("when purchaseOrderNum is true", () => {
    jest
      .spyOn(React, "useState")
      // @ts-ignore
      .mockImplementationOnce(() => realUseState(mockState))
    const wrapper = shallow(<PaymentMethod />)
    it("should display a text field", () => {
      expect(wrapper.find(TextField)).toHaveLength(1)
    })
  })
})
