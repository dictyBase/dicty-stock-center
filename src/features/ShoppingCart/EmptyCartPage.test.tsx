import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import EmptyCartPage from "./EmptyCartPage"

describe("features/ShoppingCart/EmptyCartPage", () => {
  describe("initial render", () => {
    it("displays alert message", () => {
      render(
        <Router>
          <EmptyCartPage />
        </Router>,
      )
      expect(
        screen.getByText(/There are no items in your cart./),
      ).toBeInTheDocument()
    })
    it("displays links to catalogs", () => {
      render(
        <Router>
          <EmptyCartPage />
        </Router>,
      )
      expect(
        screen.getByRole("link", { name: "Strains Catalog" }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("link", { name: "Plasmids Catalog" }),
      ).toBeInTheDocument()
    })
  })
})
