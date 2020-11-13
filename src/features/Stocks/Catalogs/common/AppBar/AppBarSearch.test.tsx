import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AppBarSearch from "./AppBarSearch"
import { useHistory } from "react-router-dom"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=all",
    }),
    useHistory: jest.fn(),
  }
})

const mockSetSearchValue = jest.fn()
const mockSetQueryVariables = jest.fn()
const mockSetSearchBoxDropdownValue = jest.fn()

jest.mock("features/Stocks/Catalogs/context/useCatalogDispatch")
const mockedUseCatalogDispatch = useCatalogDispatch as jest.Mock
mockedUseCatalogDispatch.mockReturnValue({
  setSearchValue: mockSetSearchValue,
  setQueryVariables: mockSetQueryVariables,
  setSearchBoxDropdownValue: mockSetSearchBoxDropdownValue,
})

jest.mock("features/Stocks/Catalogs/context/useCatalogStore")
const mockedUseCatalogStore = useCatalogStore as jest.Mock
mockedUseCatalogStore.mockReturnValue({
  state: {
    searchValue: "GWDI",
    leftDropdownValue: "all",
    searchBoxDropdownValue: "label",
  },
})

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

  describe("clear button", () => {
    it("should clear text box", () => {
      render(<MockComponent />)
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const clearButton = screen.getByRole("button", {
        name: /clear search box/,
      })
      userEvent.type(input, "GWDI")
      // function should be called for each letter typed
      expect(mockSetSearchValue).toHaveBeenCalledTimes(4)
      userEvent.click(clearButton)
      expect(mockSetSearchValue).toHaveBeenCalledWith("")
    })
  })

  describe("search button", () => {
    it("should update query variables and URL", () => {
      ;(useHistory as jest.Mock).mockReturnValueOnce({
        push: mockHistoryPush,
      })
      render(<MockComponent />)
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const searchButton = screen.getByRole("button", {
        name: /Catalog search icon/,
      })
      userEvent.type(input, "GWDI")
      userEvent.click(searchButton)
      expect(mockSetQueryVariables).toHaveBeenCalledWith({
        cursor: 0,
        limit: 10,
        filter: "label=~GWDI",
      })
      expect(mockHistoryPush).toHaveBeenCalledWith("?filter=all&label=GWDI")
    })
  })

  describe("dropdown select", () => {
    it("should change searchbox dropdown value", () => {
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "gwdi")
      expect(mockSetSearchBoxDropdownValue).toHaveBeenCalledWith("gwdi")
    })
  })
})
