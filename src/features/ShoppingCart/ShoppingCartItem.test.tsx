import React from "react"
import { render, screen } from "@testing-library/react"
import ShoppingCartItem, { getDropdownValues } from "./ShoppingCartItem"
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

describe("getDropdownValues function", () => {
  it("should return 1-12 for item with 6 quantity and 6 items in cart", () => {
    expect(getDropdownValues(6, 6)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ])
  })
  it("should return 1-5 for item with 4 quantity and 11 items in cart", () => {
    expect(getDropdownValues(11, 4)).toStrictEqual([1, 2, 3, 4, 5])
  })
  it("should return 1-5 for item with 1 quantity and 8 items in cart", () => {
    expect(getDropdownValues(8, 1)).toStrictEqual([1, 2, 3, 4, 5])
  })
  it("should return 1 for item with 1 quantity and 12 items in cart", () => {
    expect(getDropdownValues(12, 1)).toStrictEqual([1])
  })
  it("should return 1-2 for item with 1 quantity and 11 items in cart", () => {
    expect(getDropdownValues(11, 1)).toStrictEqual([1, 2])
  })
})
