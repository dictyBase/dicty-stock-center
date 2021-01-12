import React from "react"
import { render, screen } from "@testing-library/react"
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
        screen.getByRole("heading", { name: "Success!" }),
      ).toBeInTheDocument()
      expect(
        screen.getByText(`Order ID: ${props.location.state.orderID}`),
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
    it("renders unavailable message", () => {
      render(
        <BrowserRouter>
          <OrderConfirmation {...props} />
        </BrowserRouter>,
      )
      expect(screen.getByText(/Unavailable/)).toBeInTheDocument()
    })
  })
})
