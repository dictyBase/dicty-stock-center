import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import AppBarSearch from "./AppBarSearch"
import { CatalogProvider } from "../CatalogContext"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

describe("Stocks/Strains/Catalog/AppBarSearch", () => {
  const props = {
    dropdownItems: [],
  }
  const MockComponent = () => (
    <CatalogProvider>
      <AppBarSearch {...props} />
    </CatalogProvider>
  )

  describe("initial render", () => {
    it("should render one search box", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("textbox")).toHaveLength(1)
    })
    it("should render two buttons", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("button")).toHaveLength(2)
    })
    it("should render one dropdown", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("combobox")).toHaveLength(1)
    })
  })

  describe("clicking buttons", () => {
    it("should clear text box", () => {
      render(<MockComponent />)
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const buttons = screen.getAllByRole("button")
      fireEvent.change(input, { target: { value: "GWDI" } })
      expect(input.value).toBe("GWDI")
      fireEvent.click(buttons[1])
      expect(input.value).toBe("")
    })

    it.todo("should use dispatch when search button is clicked")
  })

  describe("form submit", () => {
    it.todo("should use dispatch when form is submitted")
  })
})
