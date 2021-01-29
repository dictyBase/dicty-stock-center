import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import OrderConfirmation from "./OrderConfirmation"

describe("OrderForm/OrderConfirmation", () => {
  describe("render with location state prop", () => {
    const props = {
      location: {
        pathname: "/order/submitted",
        state: {
          orderID: "123456",
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
        screen.getByRole("button", { name: "DSC Home" }),
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
        screen.queryByRole("button", { name: "DSC Home" }),
      ).not.toBeInTheDocument()
    })
  })
})
