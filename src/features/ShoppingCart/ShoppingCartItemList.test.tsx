import React from "react"
import { render, screen } from "@testing-library/react"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { MockCartProvider } from "common/utils/testing"
import { fees } from "common/constants/fees"

describe("features/ShoppingCart/ShoppingCartItemList", () => {
  const addedItems = [
    {
      id: "DBS123456",
      name: "jerry seinfeld",
      summary: "comedian",
      fee: fees.STRAIN_FEE,
    },
    {
      id: "DBP999999",
      name: "larry david",
      summary: "comedian",
      fee: fees.PLASMID_FEE,
    },
    {
      id: "DBS123456",
      name: "jerry seinfeld",
      summary: "comedian",
      fee: fees.STRAIN_FEE,
    },
  ]
  describe("initial render", () => {
    it("displays correct total", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={addedItems}>
          <ShoppingCartItemList />
        </MockCartProvider>,
      )
      // two strains ($30 each) + one plasmid ($15) = $75
      const total = screen.getByText("$75.00")
      expect(total).toBeInTheDocument()
    })
  })
})
