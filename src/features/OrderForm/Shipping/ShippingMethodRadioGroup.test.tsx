import React from "react"
import { shallow } from "enzyme"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"
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
        shippingAccount: "fedex",
      },
    }),
  }
})

describe("OrderForm/Shipping/ShippingMethodRadioGroup", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const setShipAccountNumSpy = jest.fn()
  const setPrepaidNoticeSpy = jest.fn()

  const props = {
    setShipAccountNum: setShipAccountNumSpy,
    setPrepaidNotice: setPrepaidNoticeSpy,
  }

  const wrapper = shallow(<ShippingMethodRadioGroup {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(RadioGroup)).toHaveLength(1)
      expect(wrapper.find(FormControlLabel)).toHaveLength(4)
    })
  })
  describe("radio button interactions", () => {
    it("sets field value when clicking prepaid shipping label", () => {
      // click prepaid label button
      const label = wrapper.find(FormControlLabel).last()
      label.simulate("change")
      expect(mockSetFieldValue).toBeCalledTimes(1)
      expect(mockSetFieldValue).toBeCalledWith(
        "shippingAccountNumber",
        "sending prepaid shipping label",
      )
      expect(setShipAccountNumSpy).toBeCalledTimes(1)
      expect(setShipAccountNumSpy).toBeCalledWith(false)
      expect(setPrepaidNoticeSpy).toBeCalledTimes(1)
      expect(setPrepaidNoticeSpy).toBeCalledWith(true)
    })
    it("does not set field value when clicking others", () => {
      // click fedex button
      const fedex = wrapper.find(FormControlLabel).first()
      fedex.simulate("change")
      expect(mockSetFieldValue).toBeCalledTimes(1)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledTimes(1)
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledTimes(1)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
      // click UPS button
      const ups = wrapper.find(FormControlLabel).at(1)
      ups.simulate("change")
      expect(mockSetFieldValue).toBeCalledTimes(2)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledTimes(2)
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledTimes(2)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
      // click DHL button
      const dhl = wrapper.find(FormControlLabel).at(2)
      dhl.simulate("change")
      expect(mockSetFieldValue).toBeCalledTimes(3)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledTimes(3)
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledTimes(3)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
    })
  })
})
