import React from "react"
import { render, screen } from "@testing-library/react"
import ShoppingCartItem from "./ShoppingCartItem"
import { MockCartProvider } from "common/utils/testing"
import { fees } from "common/constants/fees"

describe("features/ShoppingCart/ShoppingCartPage", () => {
  describe("initial render", () => {
    it("displays cart item with expected quantity", () => {
      const item = {
        id: "DBS123456",
        name: "jerry seinfeld",
        summary: "comedian",
        fee: fees.STRAIN_FEE,
      }
      const cartItems = new Array(5).fill(item)
      const itemWithQuantity = {
        ...item,
        quantity: 5,
      }
      render(
        <MockCartProvider mocks={[]} addedItems={cartItems}>
          <ShoppingCartItem item={itemWithQuantity} />
        </MockCartProvider>,
      )
      const cartItem = screen.getByRole("link", { name: "jerry seinfeld" })
      expect(cartItem).toBeInTheDocument()
      expect(cartItem).toHaveAttribute("href", "/strains/DBS123456")
      // shows correct quantity
      const quantity = screen.getByTestId("cart-quantity")
      expect(quantity).toHaveTextContent(/Quantity5/)
    })
  })
})
