import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter, useLocation } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: jest.fn(),
  }
})

describe("app/layout/Breadcrumbs", () => {
  const MockComponent = () => (
    <BrowserRouter>
      <Breadcrumbs />
    </BrowserRouter>
  )

  describe("subpages", () => {
    it("should include DSC Home link first", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/vandelay",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent(
        "Vandelay",
      )
    })

    it("should display FAQs for /faq subroute", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/information/faq",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-link")).toHaveTextContent(
        "Information",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent("FAQs")
    })

    it("should display MyDSC for /mydsc subroute", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/mydsc",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent("MyDSC")
    })

    it("should display Add Page for /addpage subroute", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/addpage",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent(
        "Add Page",
      )
    })

    it("should remove extra characters from phenotypes breadcrumb", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/phenotypes/abolished+protein+phosphorylation",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-text")).toHaveTextContent(
        "Phenotypes",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent(
        "abolished protein phosphorylation",
      )
    })

    it("should remove extra characters from hyphenated pathnames", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/information/other-stock-centers",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).toHaveTextContent(
        "DSC Home",
      )
      expect(screen.getByTestId("breadcrumbs-link")).toHaveTextContent(
        "Information",
      )
      expect(screen.getByTestId("breadcrumbs-last")).toHaveTextContent(
        "Other Stock Centers",
      )
    })
  })

  describe("homepage", () => {
    it("should not render breadcrumbs on homepage", () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        pathname: "/",
      })
      render(<MockComponent />)
      expect(screen.queryByTestId("breadcrumbs-home")).not.toBeInTheDocument()
    })
  })
})
