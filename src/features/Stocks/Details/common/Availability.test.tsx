import React from "react"
import { render, screen } from "@testing-library/react"
import Availability from "./Availability"
import { MockCartProvider } from "common/utils/testing"

describe("features/Stocks/Details/common/Availability", () => {
  describe("available stock", () => {
    it("should include add to cart button", () => {
      const props = {
        cartData: {
          id: "DBS123456",
          name: "test1",
          summary: "this is the best test strain in the world",
          type: "strain",
        },
        inStock: true,
      }
      render(
        <MockCartProvider addedItems={[]} mocks={[]}>
          <Availability {...props} />
        </MockCartProvider>,
      )
      expect(screen.getByText(/Add to Cart/)).toBeInTheDocument()
    })
  })

  describe("unavailable notification", () => {
    it("should display unavailable notification", () => {
      const props = {
        cartData: {
          id: "DBS123456",
          name: "test1",
          summary: "this is the best test strain in the world",
          type: "strain",
        },
        inStock: false,
      }
      render(
        <MockCartProvider addedItems={[]} mocks={[]}>
          <Availability {...props} />
        </MockCartProvider>,
      )
      expect(
        screen.getByText(/Currently unavailable at the DSC/),
      ).toBeInTheDocument()
    })
  })
})
