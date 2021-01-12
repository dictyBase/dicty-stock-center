import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PaymentMethodRadioGroup from "./PaymentMethodRadioGroup"

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
  const setWaiverRequestedSpy = jest.fn()
  const props = {
    setPurchaseOrderNum: setPurchaseOrderNumSpy,
    setWaiverRequested: setWaiverRequestedSpy,
  }

  describe("initial render", () => {
    it("renders radio buttons", () => {
      render(<PaymentMethodRadioGroup {...props} />)
      const radios = screen.getAllByRole("radio")
      expect(radios).toHaveLength(4)
    })
  })

  describe("radio button interactions", () => {
    it("sets field value when clicking first two radio buttons", () => {
      render(<PaymentMethodRadioGroup {...props} />)
      // click wire transfer button
      const wire = screen.getByRole("radio", {
        name: "Wire Transfer",
      })
      userEvent.click(wire)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(false)
      expect(setWaiverRequestedSpy).toBeCalledWith(false)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "N/A")
      // click credit card button
      const cc = screen.getByRole("radio", {
        name: "Credit Card",
      })
      userEvent.click(cc)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "N/A")
      expect(setWaiverRequestedSpy).toBeCalledWith(false)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(false)
    })

    it("does not set field value when clicking Purchase Order radio button", () => {
      render(<PaymentMethodRadioGroup {...props} />)
      // click purchase order button
      const po = screen.getByRole("radio", {
        name: "Purchase Order (PO)",
      })
      userEvent.click(po)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(true)
      expect(setWaiverRequestedSpy).toBeCalledWith(false)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "")
    })

    it("does not set field value when clicking Waiver radio button", () => {
      render(<PaymentMethodRadioGroup {...props} />)
      // click waiver button
      const waiver = screen.getByRole("radio", {
        name: "Waiver Requested",
      })
      userEvent.click(waiver)
      expect(setWaiverRequestedSpy).toBeCalledWith(true)
      expect(setPurchaseOrderNumSpy).toBeCalledWith(false)
      expect(mockSetFieldValue).toBeCalledWith("purchaseOrderNum", "N/A")
    })
  })
})
