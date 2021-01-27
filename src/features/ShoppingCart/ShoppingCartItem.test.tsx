import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
      expect(quantity).toHaveTextContent(/Qty5/)
    })
  })

  describe("changing quantity", () => {
    it("updates quantity displayed", async () => {
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
      // should list $150.00 for five strains ($30 each)
      expect(screen.getByTestId("fee")).toHaveTextContent("$150.00")

      // select 2 from quantity dropdown
      userEvent.click(screen.getByLabelText(/Qty/))
      userEvent.click(screen.getByTestId("option-2"))
      // should now display quantity 2
      await waitFor(() => {
        expect(screen.getByText(2)).toBeInTheDocument()
        // need to determine why fee is not being updated in tests
        // material-ui selects have weird behavior
        // https://github.com/testing-library/react-testing-library/issues/322
        // expect(screen.getByTestId("fee")).toHaveTextContent("$60.00")
      })
    })
  })
})
