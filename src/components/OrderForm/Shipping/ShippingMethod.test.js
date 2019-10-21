import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import ShippingMethod from "./ShippingMethod"
import Grid from "@material-ui/core/Grid"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"

describe("OrderForm/Shipping/ShippingMethod", () => {
  const handleChangeSpy = sinon.spy()
  const setFieldValueSpy = sinon.spy()
  const props = {
    handleChange: handleChangeSpy,
    setFieldValue: setFieldValueSpy,
  }
  const wrapper = shallow(<ShippingMethod {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(TextField)).toHaveLength(1)
      expect(wrapper.find(RadioGroup)).toHaveLength(1)
      expect(wrapper.find(FormControlLabel)).toHaveLength(4)
    })
  })
  describe("radio button interactions", () => {
    it("sets field value when clicking prepaid shipping label", () => {
      // click prepaid label button
      const label = wrapper
        .dive()
        .find(FormControlLabel)
        .last()
      label.simulate("change")
      expect(setFieldValueSpy.calledOnce).toBe(true)
    })
    it("does not set field value when clicking others", () => {
      // reset spy
      setFieldValueSpy.resetHistory()
      // click fedex button
      const fedex = wrapper
        .dive()
        .find(FormControlLabel)
        .first()
      fedex.simulate("change")
      expect(setFieldValueSpy.notCalled).toBe(true)
      // click UPS button
      const ups = wrapper
        .dive()
        .find(FormControlLabel)
        .at(1)
      ups.simulate("change")
      expect(setFieldValueSpy.notCalled).toBe(true)
      // click DHL button
      const dhl = wrapper
        .dive()
        .find(FormControlLabel)
        .at(2)
      dhl.simulate("change")
      expect(setFieldValueSpy.notCalled).toBe(true)
    })
  })
})
