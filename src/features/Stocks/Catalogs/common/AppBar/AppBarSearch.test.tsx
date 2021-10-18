import { render, screen, waitFor } from "@testing-library/react"
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
      search: "?filter=regular",
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
    leftDropdownValue: "regular",
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
      expect(screen.getByRole("search-input")).toBeInTheDocument()
    })
    it("should render one button to clear search", () => {
      render(<MockComponent />)
      expect(screen.getByLabelText("Clear")).toBeInTheDocument()
    })
    it("should render chip holder", () => {
      render(<MockComponent />)
      expect(screen.getByRole("chip-holder")).toBeInTheDocument()
    })
  })

  describe("clear button", () => {
    it("should clear text box", async () => {
      render(<MockComponent />)
      const input = screen.getByRole("search-input") as HTMLInputElement
      const clearButton = screen.getByLabelText("Clear")
      const searchVal = "GWDI"

      userEvent.type(input, searchVal)
      await waitFor(() => {
        expect(input).toHaveValue(searchVal)
      })

      userEvent.click(clearButton)
      expect(mockSetSearchValue).toHaveBeenCalledWith("")
    })
  })

  describe("search button", () => {
    it("should update query variables and URL", () => {
      mockedUseCatalogStore.mockReturnValueOnce({
        state: {
          searchValue: "GWDI",
          leftDropdownValue: "regular",
          searchBoxDropdownValue: "label",
        },
      })
      render(<MockComponent />)
      const input = screen.getByRole("search-input") as HTMLInputElement
      const searchButton = screen.getByRole("search-button")
      userEvent.type(input, "GWDI")
      userEvent.click(searchButton)
      expect(mockSetQueryVariables).toHaveBeenCalledWith({
        cursor: 0,
        limit: 10,
        filter: "label=~GWDI",
      })
      expect(mockHistoryPush).toHaveBeenCalledWith("?filter=regular&label=GWDI")
    })

    it("should redirect to details page when valid strain ID is entered", () => {
      const strainID = "DBS0351367"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: strainID,
          leftDropdownValue: "regular",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)

      // TODO: Add fields test
      // const dropdown = screen.getByRole("combobox")
      // userEvent.selectOptions(dropdown, "id")
      const input = screen.getByRole("search-input") as HTMLInputElement
      const searchButton = screen.getByRole("search-button")

      userEvent.type(input, strainID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(`/strains/${strainID}`)
    })

    it("should redirect to details page when valid plasmid ID is entered", () => {
      const plasmidID = "DBP0001070"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: plasmidID,
          leftDropdownValue: "regular",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)

      // TODO: Add fields test
      // const dropdown = screen.getByRole("combobox")
      // userEvent.selectOptions(dropdown, "id")
      const input = screen.getByRole("search-input") as HTMLInputElement
      const searchButton = screen.getByRole("search-button")

      userEvent.type(input, plasmidID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(`/plasmids/${plasmidID}`)
    })

    it("should not redirect to details page when invalid ID is entered", () => {
      const fakeStrainID = "notanid"
      mockedUseCatalogStore.mockReturnValue({
        state: {
          searchValue: fakeStrainID,
          leftDropdownValue: "regular",
          searchBoxDropdownValue: "id",
        },
      })
      render(<MockComponent />)

      // TODO: Add fields test
      // const dropdown = screen.getByRole("combobox")
      // userEvent.selectOptions(dropdown, "id")
      const input = screen.getByRole("search-input") as HTMLInputElement
      const searchButton = screen.getByRole("search-button")

      userEvent.type(input, fakeStrainID)
      userEvent.click(searchButton)
      expect(mockHistoryPush).toHaveBeenCalledWith(
        `?filter=regular&id=${fakeStrainID}`,
      )
    })
  })

  // TODO: Enable test when field dropdown is implemented
  /* describe("dropdown select", () => {
    it("should change searchbox dropdown value", () => {
      render(<MockComponent />)
      const dropdown = screen.getByRole("combobox")
      userEvent.selectOptions(dropdown, "summary")
      expect(mockSetSearchBoxDropdownValue).toHaveBeenCalledWith("summary")
    })
  }) */
})
