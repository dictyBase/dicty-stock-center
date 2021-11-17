import React from "react"
import { render, screen } from "@testing-library/react"
import OrderConfirmation from "./OrderConfirmation"
import { OrderContext, orderReducer, OrderState } from "./context/OrderContext"
import { FormikValues } from "./utils/initialValues"

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
  const useParams = () => {
    return { orderId: orderState.orderID }
  }
  return { useParams }
})

jest.mock("./context/useOrderStore", () => {
  const useOrderStore = () => {
    return {
      state: orderState,
    }
  }
  return useOrderStore
})

describe("OrderForm/OrderConfirmation", () => {
  describe("render with location state prop", () => {
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
})
