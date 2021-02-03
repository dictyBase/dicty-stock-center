import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import PaymentInfoBox from "./PaymentInfoBox"

describe("OrderForm/Payment/PaymentInfoBox", () => {
  describe("initial render", () => {
    it("renders expected components", () => {
      render(
        <BrowserRouter>
          <PaymentInfoBox />
        </BrowserRouter>,
      )
      expect(
        screen.getByRole("button", { name: "Payment Information" }),
      ).toBeInTheDocument()
      const emailLink = screen.getByRole("link")
      expect(emailLink).toHaveAttribute(
        "href",
        "mailto:dictystocks@northwestern.edu",
      )
    })
  })
})
