import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import PaymentMethod from "./PaymentMethod"
import Grid from "@material-ui/core/Grid"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

describe("OrderForm/Payment/PaymentMethod", () => {
  const handleChangeSpy = sinon.spy()
  const setFieldValueSpy = sinon.spy()
  const props = {
    handleChange: handleChangeSpy,
    setFieldValue: setFieldValueSpy,
  }
  const wrapper = shallow(<PaymentMethod {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(RadioGroup)).toHaveLength(1)
      expect(wrapper.find(FormControlLabel)).toHaveLength(3)
    })
  })
  describe("radio button interactions", () => {
    it("sets field value when clicking first two radio buttons", () => {
      // click credit card button
      const cc = wrapper
        .dive()
        .find(FormControlLabel)
        .first()
      cc.simulate("change")
      expect(setFieldValueSpy.calledOnce).toBe(true)
      // click wire transfer button
      const wire = wrapper
        .dive()
        .find(FormControlLabel)
        .at(1)
      wire.simulate("change")
      expect(setFieldValueSpy.calledTwice).toBe(true)
    })
    it("does not set field value when clicking Purchase Order radio button", () => {
      // reset spy
      setFieldValueSpy.resetHistory()
      // click wire transfer button
      const po = wrapper
        .dive()
        .find(FormControlLabel)
        .at(2)
      po.simulate("change")
      expect(setFieldValueSpy.notCalled).toBe(true)
    })
  })
})
