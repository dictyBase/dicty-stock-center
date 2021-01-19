import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
      // three strains ($30 each) + one plasmid ($15) = $75
      const total = screen.getByText("$105.00")
      expect(total).toBeInTheDocument()
    })
  })
  describe("button clicking", () => {
    it("updates quantity on trash button click", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={addedItems}>
          <ShoppingCartItemList />
        </MockCartProvider>,
      )
      const strainQuantity = screen.getAllByTestId("cart-quantity")[0]
      expect(strainQuantity).toHaveTextContent(/Qty:3/)
      const trashButtons = screen.getAllByRole("button", {
        name: "Remove Item",
      })
      // should have two buttons - one for each item row
      expect(trashButtons).toHaveLength(2)
      // click trash button on row with multiple of strain
      userEvent.click(trashButtons[0])
      expect(strainQuantity).toHaveTextContent(/Qty:2/)
    })
  })
})
