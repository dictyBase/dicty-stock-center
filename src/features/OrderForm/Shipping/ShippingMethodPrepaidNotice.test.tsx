import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import ShippingMethodPrepaidNotice from "./ShippingMethodPrepaidNotice"

describe("OrderForm/Shipping/ShippingMethodPrepaidNotice", () => {
  describe("initial render", () => {
    it("renders email link", () => {
      render(
        <BrowserRouter>
          <ShippingMethodPrepaidNotice />
        </BrowserRouter>,
      )
      const emailLink = screen.getByRole("link")
      expect(emailLink).toHaveAttribute(
        "href",
        "mailto:dictystocks@northwestern.edu",
      )
    })
  })
})
