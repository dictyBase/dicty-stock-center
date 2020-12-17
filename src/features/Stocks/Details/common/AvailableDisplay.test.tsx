import React from "react"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AvailableDisplay from "./AvailableDisplay"
import { fees } from "common/constants/fees"
import { MockCartProvider } from "common/utils/testing"

describe("features/Stocks/Details/common/AvailableDisplay", () => {
  describe("available display", () => {
    it("should display capacity full message when reaching 12 items in cart", () => {
      const props = {
        cartData: {
          id: "DBS123456",
          name: "test1",
          summary: "this is the best test strain in the world",
          fee: fees.STRAIN_FEE,
        },
      }
      render(
        <MockCartProvider
          addedItems={Array(10).fill(props.cartData)}
          mocks={[]}>
          <AvailableDisplay {...props} />
        </MockCartProvider>,
      )
      const cartButton = screen.getByText(/Add to Cart/)
      expect(cartButton).toBeInTheDocument()
      const dropdown = screen.getByRole("button", { name: "1" })
      userEvent.click(dropdown)
      const listbox = within(screen.getByRole("listbox"))
      userEvent.click(listbox.getByText("2"))
      userEvent.click(cartButton)
      expect(screen.getByText(/Cart capacity is full/)).toBeInTheDocument()
    })
  })
})
