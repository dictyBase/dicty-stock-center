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
    name: "Descriptor",
    value: "label",
  },
  {
    name: "Summary",
    value: "summary",
  },
  {
    name: "ID",
    value: "id",
  },
]

describe("Stocks/Catalog//common/AppBar/AppBarSearch", () => {
  const props = {
    dropdownItems,
  }
  const MockComponent = () => (
    <CatalogProvider stockType="strain">
      <AppBarSearch {...props} />
    </CatalogProvider>
  )

  beforeEach(() => {
    ;(useHistory as jest.Mock).mockReturnValue({
      push: mockHistoryPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    it("should render one search box", () => {
      render(<MockComponent />)
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })
    it("should render two buttons", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("button")).toHaveLength(2)
    })
    it("should render one dropdown with three items", () => {
      render(<MockComponent />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getAllByRole("option")).toHaveLength(3)
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
      mockedUseCatalogStore.mockReturnValueOnce({
        state: {
          searchValue: "GWDI",
          leftDropdownValue: "all",
          searchBoxDropdownValue: "label",
        },
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

    it("should redirect to details page when valid strain ID is entered", () => {
      const strainID = "DBS0351367"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: strainID,
          leftDropdownValue: "all",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "id")
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const searchButton = screen.getByRole("button", {
        name: /Catalog search icon/,
      })
      userEvent.type(input, strainID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(`/strains/${strainID}`)
    })

    it("should redirect to details page when valid plasmid ID is entered", () => {
      const plasmidID = "DBP0001070"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: plasmidID,
          leftDropdownValue: "all",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "id")
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const searchButton = screen.getByRole("button", {
        name: /Catalog search icon/,
      })
      userEvent.type(input, plasmidID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(`/plasmids/${plasmidID}`)
    })

    it("should not redirect to details page when invalid ID is entered", () => {
      const fakeStrainID = "notanid"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: fakeStrainID,
          leftDropdownValue: "all",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "id")
      const input = screen.getByPlaceholderText("Search...") as HTMLInputElement
      const searchButton = screen.getByRole("button", {
        name: /Catalog search icon/,
      })
      userEvent.type(input, fakeStrainID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(
        `?filter=all&id=${fakeStrainID}`,
      )
    })
  })

  describe("dropdown select", () => {
    it("should change searchbox dropdown value", () => {
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "summary")
      expect(mockSetSearchBoxDropdownValue).toHaveBeenCalledWith("summary")
    })
  })
})
