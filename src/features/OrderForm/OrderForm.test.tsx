import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import OrderForm from "./OrderForm"

describe("features/OrderForm/OrderForm", () => {
  describe("submitting unfilled form", () => {
    it("should display warnings on empty submit", async () => {
      render(<OrderForm />)
      expect(
        screen.getByRole("heading", { name: "Shipping Address" }),
      ).toBeInTheDocument()
      const button = screen.getByRole("button", { name: "Continue Button" })
      expect(button).toBeInTheDocument()
      userEvent.click(button)
      // screen.debug(screen.getByRole("form"))
      const warning = await screen.findByText(/First name is required/)
      expect(warning).toBeInTheDocument()
    })
  })
})
