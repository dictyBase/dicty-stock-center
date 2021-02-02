import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import OrderConfirmation from "./OrderConfirmation"
import mockValues from "./utils/mockValues"

jest.mock("@react-pdf/renderer", () => ({
  PDFViewer: jest.fn(() => null),
  StyleSheet: {
    create: jest.fn(() => null),
  },
}))

describe("OrderForm/OrderConfirmation", () => {
  describe("render with location state prop", () => {
    const props = {
      location: {
        pathname: "/order/submitted",
        state: {
          orderID: "123456",
          cartItems: [],
          formData: mockValues,
          cartTotal: "$0.00",
        },
      },
    }
    it("renders success message for valid order IDs", () => {
      render(
        <BrowserRouter>
          <OrderConfirmation {...props} />
        </BrowserRouter>,
      )
      expect(
        screen.getByRole("heading", { name: "Thank you for your order" }),
      ).toBeInTheDocument()
      expect(
        screen.getByText(`Order ID: ${props.location.state.orderID}`),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Back to DSC homepage" }),
      ).toBeInTheDocument()
    })
  })

  describe("render with location state undefined", () => {
    const props = {
      location: {
        pathname: "/order/submitted",
        state: undefined,
      },
    }
    it("does not display confirmation page", () => {
      render(
        <BrowserRouter>
          <OrderConfirmation {...props} />
        </BrowserRouter>,
      )
      expect(
        screen.queryByRole("heading", { name: "Thank you for your order" }),
      ).not.toBeInTheDocument()
      expect(screen.queryByText(/Order ID/)).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Back to DSC homepage" }),
      ).not.toBeInTheDocument()
    })
  })
})
