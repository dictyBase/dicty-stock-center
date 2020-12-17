import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import AddToCartDialog from "./AddToCartDialog"
import { fees } from "common/constants/fees"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("features/Stocks/Catalogs/common/AddToCartDialog", () => {
  const setShowDialogSpy = jest.fn()
  const setCheckedItemsSpy = jest.fn()
  const props = {
    data: [
      {
        id: "DBS1234",
        name: "test strain",
        summary: "test summary",
        fee: fees.STRAIN_FEE,
      },
    ],
    setCheckedItems: setCheckedItemsSpy,
    setShowDialog: setShowDialogSpy,
  }

  describe("closing dialog", () => {
    it("calls functions when clicking close button", () => {
      render(
        <CartProvider>
          <BrowserRouter>
            <AddToCartDialog {...props} />
          </BrowserRouter>
        </CartProvider>,
      )
      const button = screen.getByRole("button", { name: "View Cart" })
      userEvent.click(button)
      expect(setCheckedItemsSpy).toHaveBeenCalledTimes(1)
      expect(setShowDialogSpy).toHaveBeenCalledTimes(1)
    })
  })
})
