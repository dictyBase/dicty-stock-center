import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ShippingMethodRadioGroup from "./ShippingMethodRadioGroup"

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

  describe("initial render", () => {
    it("renders radio buttons", () => {
      render(<ShippingMethodRadioGroup {...props} />)
      const radios = screen.getAllByRole("radio")
      expect(radios).toHaveLength(4)
    })
  })

  describe("radio button interactions", () => {
    it("sets field value when clicking prepaid shipping label", () => {
      render(<ShippingMethodRadioGroup {...props} />)
      // click prepaid label button
      const label = screen.getByRole("radio", {
        name: "Send prepaid shipping label",
      })
      userEvent.click(label)
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
      render(<ShippingMethodRadioGroup {...props} />)
      // click UPS button
      const ups = screen.getByRole("radio", {
        name: "UPS",
      })
      userEvent.click(ups)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
      // click FedEx button
      const fedex = screen.getByRole("radio", {
        name: "FedEx",
      })
      userEvent.click(fedex)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
      // click DHL button
      const dhl = screen.getByRole("radio", {
        name: "DHL",
      })
      userEvent.click(dhl)
      expect(mockSetFieldValue).toBeCalledWith("shippingAccountNumber", "")
      expect(setShipAccountNumSpy).toBeCalledWith(true)
      expect(setPrepaidNoticeSpy).toBeCalledWith(false)
    })
  })
})
