import React from "react"
import { shallow } from "enzyme"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const mockSetFieldValue = jest.fn()

jest.mock("formik", () => {
  const originalModule = jest.requireActual("formik")

  return {
    ...originalModule,
    useFormikContext: () => ({
      setFieldValue: mockSetFieldValue,
      handleChange: jest.fn(),
      values: {
        paymentMethod: "credit",
      },
    }),
  }
})

describe("OrderForm/Payment/PaymentMethodRadioGroup", () => {
  const setPurchaseOrderNumSpy = jest.fn()
  const props = {
    setPurchaseOrderNum: setPurchaseOrderNumSpy,
  }
  const wrapper = shallow(<PaymentMethodRadioGroup {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(RadioGroup)).toHaveLength(1)
      expect(wrapper.find(FormControlLabel)).toHaveLength(3)
    })
  })
  describe("radio button interactions", () => {
    it("sets field value when clicking first two radio buttons", () => {
      // click credit card button
      const cc = wrapper.find(FormControlLabel).first()
      cc.simulate("change")
      expect(mockSetFieldValue).toBeCalledTimes(1)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "N/A")
      expect(setPurchaseOrderNumSpy).toBeCalledTimes(1)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(false)
      // click wire transfer button
      const wire = wrapper.find(FormControlLabel).at(1)
      wire.simulate("change")
      expect(setPurchaseOrderNumSpy).toBeCalledTimes(2)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(false)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "N/A")
      expect(mockSetFieldValue).toBeCalledTimes(2)
    })
    it("does not set field value when clicking Purchase Order radio button", () => {
      // click purchase order button
      const po = wrapper.find(FormControlLabel).at(2)
      po.simulate("change")
      expect(setPurchaseOrderNumSpy).toBeCalledWith(true)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "")
    })
  })
})
