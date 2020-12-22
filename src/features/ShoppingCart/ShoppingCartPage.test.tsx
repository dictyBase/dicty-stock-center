import React from "react"
import { render, screen } from "@testing-library/react"
import ShoppingCartPage from "./ShoppingCartPage"
import { MockCartProvider } from "common/utils/testing"
import { fees } from "common/constants/fees"

describe("features/ShoppingCart/ShoppingCartPage", () => {
  const addedItems = [
    {
      id: "DBS123456789",
      name: "jerry seinfeld",
      summary: "comedian",
      fee: fees.STRAIN_FEE,
    },
  ]
  describe("initial render", () => {
    it("displays cart item", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={addedItems}>
          <ShoppingCartPage />
        </MockCartProvider>,
      )
      const item = screen.getByRole("link", { name: "jerry seinfeld" })
      expect(item).toBeInTheDocument()
      expect(item).toHaveAttribute("href", "/strains/DBS123456789")
    })

    it("displays notification on empty cart", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={[]}>
          <ShoppingCartPage />
        </MockCartProvider>,
      )
      expect(
        screen.getByText(/There are no items in your cart./),
      ).toBeInTheDocument()
    })
  })
})
