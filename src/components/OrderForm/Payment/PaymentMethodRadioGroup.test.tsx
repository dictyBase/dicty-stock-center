import React from "react"
import { mount } from "enzyme"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const mockSetFieldValue = jest.fn()

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useFormikContext: () => ({
    setFieldValue: mockSetFieldValue,
    handleChange: jest.fn(),
  }),
}))

describe("OrderForm/Payment/PaymentMethodRadioGroup", () => {
  const setPurchaseOrderNumSpy = jest.fn()
  const props = {
    setPurchaseOrderNum: setPurchaseOrderNumSpy,
  }
  const wrapper = mount(<PaymentMethodRadioGroup {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(RadioGroup)).toHaveLength(1)
      expect(wrapper.find(FormControlLabel)).toHaveLength(3)
    })
  })
  // describe("radio button interactions", () => {
  //   it("sets field value when clicking first two radio buttons", () => {
  // click credit card button
  // const cc = wrapper.find(FormControlLabel).at(0)
  // cc.simulate("change")
  // expect(mockSetFieldValue).toBeCalled()
  // expect(setPurchaseOrderNumSpy).toBeCalled()
  // click wire transfer button
  // const wire = wrapper.find(FormControlLabel).at(1)
  // wire.simulate("change")
  // expect(setPurchaseOrderNumSpy).toBeCalledTimes(2)
  // })
  // it("does not set field value when clicking Purchase Order radio button", () => {
  //   // click wire transfer button
  //   const po = wrapper.find(FormControlLabel).at(2)
  //   po.simulate("change")
  //   wrapper.update()
  //   expect(setPurchaseOrderNumSpy).toBeCalledWith(true)
  // })
  // })
})
