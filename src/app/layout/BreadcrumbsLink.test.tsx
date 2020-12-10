import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import BreadcrumbsLink from "./BreadcrumbsLink"

describe("app/layout/BreadcrumbsLink", () => {
  describe("non-clickable breadcrumbs", () => {
    it("renders plain text for phenotypes", () => {
      render(<BreadcrumbsLink pathname="phenotypes" />)
      expect(screen.getByTestId("breadcrumbs-text")).toHaveTextContent(
        "Phenotypes",
      )
    })
    it("renders plain text for order form", () => {
      render(<BreadcrumbsLink pathname="order" />)
      expect(screen.getByTestId("breadcrumbs-text")).toHaveTextContent("Order")
    })
  })

  describe("breadcrumb links", () => {
    it("renders link for strain catalog", () => {
      render(
        <BrowserRouter>
          <BreadcrumbsLink pathname="strains" />
        </BrowserRouter>,
      )
      expect(screen.getByRole("link")).toHaveTextContent("Strains")
    })

    it("renders link for plasmid catalog", () => {
      render(
        <BrowserRouter>
          <BreadcrumbsLink pathname="plasmids" />
        </BrowserRouter>,
      )
      expect(screen.getByRole("link")).toHaveTextContent("Plasmids")
    })

    it("renders link for information", () => {
      render(
        <BrowserRouter>
          <BreadcrumbsLink pathname="information" />
        </BrowserRouter>,
      )
      expect(screen.getByRole("link")).toHaveTextContent("Information")
    })

    it("renders empty link for non-existent routes", () => {
      render(
        <BrowserRouter>
          <BreadcrumbsLink pathname="bananas" />
        </BrowserRouter>,
      )
      expect(screen.getByRole("link")).toHaveTextContent("")
    })
  })
})
