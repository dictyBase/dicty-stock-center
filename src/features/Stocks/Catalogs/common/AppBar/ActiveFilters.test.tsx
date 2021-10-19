import { render, screen, waitFor } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import ActiveFilters from "./ActiveFilters"
import userEvent from "@testing-library/user-event"

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
const mockSetQueryVariables = jest.fn()

jest.mock("features/Stocks/Catalogs/context/useCatalogDispatch")
const mockedUseCatalogDispatch = useCatalogDispatch as jest.Mock
mockedUseCatalogDispatch.mockReturnValue({
  setQueryVariables: mockSetQueryVariables,
})

jest.mock("features/Stocks/Catalogs/context/useCatalogStore")
const mockedUseCatalogStore = useCatalogStore as jest.Mock
mockedUseCatalogStore.mockReturnValue({
  state: {
    searchValue: "GWDI",
    leftDropdownValue: "regular",
    activeFilters: ["Regular"],
  },
})

describe("Stocks/Catalog//common/AppBar/AppBarSearch", () => {
  const MockComponent = () => <ActiveFilters />

  beforeEach(() => {
    ;(useHistory as jest.Mock).mockReturnValue({
      push: mockHistoryPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    it("should render chip holder", () => {
      render(<MockComponent />)
      expect(screen.getByRole("chip-holder")).toBeInTheDocument()
    })

    it("should render one chip for regular", () => {
      render(<MockComponent />)
      expect(screen.getAllByRole("chip")).toHaveLength(1)
      expect(screen.getByText("Regular")).toBeInTheDocument()
    })

    it("should remove regular chip", async () => {
      render(<MockComponent />)
      const chip = screen.getByRole("chip")
      const delButton = chip.children[1]

      expect(delButton).toHaveClass("MuiChip-deleteIcon")
    })
  })
})
