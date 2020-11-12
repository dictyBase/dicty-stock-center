import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AppBarSearch from "./AppBarSearch"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

const mockSetSearchValue = jest.fn()

jest.mock("../CatalogContext", () => ({
  useCatalogStore: () => ({
    setSearchValue: mockSetSearchValue,
  }),
}))

const dropdownItems = [
  {
    name: "All Strains",
    value: "all",
  },
  {
    name: "GWDI Strains",
    value: "gwdi",
  },
  {
    name: "Available Strains",
    value: "available",
  },
  {
    name: "Unavailable Strains",
    value: "unavailable",
  },
  {
    name: "Bacterial Strains",
    value: "bacterial",
  },
]

describe("Stocks/Strains/Catalog/AppBarSearch", () => {
  const props = {
    dropdownItems,
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
    it("should render one dropdown with five items", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("combobox")).toHaveLength(1)
      expect(screen.getAllByRole("option")).toHaveLength(5)
    })
  })

  describe("clicking buttons", () => {
    it("should clear text box", () => {
      render(<MockComponent />)
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const clearButton = screen.getByRole("button", {
        name: /clear search box/,
      })
      userEvent.type(input, "GWDI")
      expect(input.value).toBe("GWDI")
      userEvent.click(clearButton)
      expect(input.value).toBe("")
    })

    it.todo("should use dispatch when search button is clicked")
  })

  describe("form submit", () => {
    it.todo("should use dispatch when form is submitted")
  })
})
