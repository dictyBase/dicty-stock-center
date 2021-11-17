import React from "react"
import { render, screen } from "@testing-library/react"
import OrderConfirmation from "./OrderConfirmation"
import { OrderState } from "./context/OrderContext"
import { FormikValues } from "./utils/initialValues"
import useOrderStore from "./context/useOrderStore"
import { useParams, Navigate, NavigateProps } from "react-router-dom"

const orderState: OrderState = {
  orderID: "123456",
  cartItems: [],
  formData: {} as FormikValues,
  cartTotal: "$0.00",
}

jest.mock("@react-pdf/renderer", () => ({
  PDFViewer: jest.fn(() => null),
  StyleSheet: {
    create: jest.fn(() => null),
  },
}))

jest.mock("react-router-dom", () => {
  const useParams = jest.fn().mockReturnValue({ orderId: orderState.orderID })
  const Navigate = jest.fn()

  return { useParams, Navigate }
})

jest.mock("./context/useOrderStore", () =>
  jest.fn().mockReturnValue({
    state: orderState,
  }),
)

describe("OrderForm/OrderConfirmation", () => {
  describe("render with proper order state", () => {
    it("renders success message for valid order IDs", () => {
      render(<OrderConfirmation />)
      expect(
        screen.getByRole("heading", { name: "Thank you for your order" }),
      ).toBeInTheDocument()
      expect(
        screen.getByText(`Order ID: ${orderState.orderID}`),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Back to DSC homepage" }),
      ).toBeInTheDocument()
    })
  })

  describe("render with undefined/invalid order state", () => {
    it("should redirect to home", () => {
      ;(useParams as jest.Mock).mockReturnValueOnce({ orderId: "123" })
      ;(useOrderStore as jest.Mock).mockReturnValueOnce({
        state: {
          orderID: "",
          cartItems: [],
          formData: {} as FormikValues,
          cartTotal: "$0.00",
        },
      })
      ;(Navigate as jest.Mock).mockReturnValueOnce(
        ({ to, replace, state }: NavigateProps) => <h1>Stockcenter</h1>,
      )

      render(<OrderConfirmation />)
    })
  })
})
