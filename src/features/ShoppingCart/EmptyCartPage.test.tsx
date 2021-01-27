import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import EmptyCartPage from "./EmptyCartPage"

describe("features/ShoppingCart/EmptyCartPage", () => {
  describe("initial component render", () => {
    it("displays empty notification", () => {
      render(
        <Router>
          <EmptyCartPage />
        </Router>,
      )
      expect(
        screen.getByText(/Your shopping cart is empty./),
      ).toBeInTheDocument()
    })
    it("displays button links to catalogs", () => {
      render(
        <Router>
          <EmptyCartPage />
        </Router>,
      )
      expect(
        screen.getByRole("button", { name: "Strain Catalog" }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Plasmid Catalog" }),
      ).toBeInTheDocument()
    })
  })
})
