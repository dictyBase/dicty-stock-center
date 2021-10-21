import { render, screen, waitFor } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import ActiveFilters from "./ActiveFilters"
import { CatalogProvider } from "../../context/CatalogContext"
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
const mockSetActiveFilters = jest.fn()

jest.mock("features/Stocks/Catalogs/context/useCatalogDispatch")
const mockedUseCatalogDispatch = useCatalogDispatch as jest.Mock
mockedUseCatalogDispatch.mockReturnValue({
  setQueryVariables: mockSetQueryVariables,
  setActiveFilters: mockSetActiveFilters,
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
  let i = 0
  const MockComponent = () => (
    <CatalogProvider stockType="strain">
      <ActiveFilters removeFilter={() => i++} />
    </CatalogProvider>
  )

  beforeEach(() => {
    ;(useHistory as jest.Mock).mockReturnValue({
      push: mockHistoryPush,
    })
  })

  afterEach(() => {
    i = 0
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    it("should render chip holder", () => {
      render(<MockComponent />)
      expect(screen.getByRole("chip-holder")).toBeInTheDocument()
    })

    it("should render one chip for regular", () => {
      render(<MockComponent />)
      expect(screen.getByRole("chip")).toBeInTheDocument()
      expect(screen.getByText("Regular")).toBeInTheDocument()
    })

    it("should remove chip", async () => {
      render(<MockComponent />)

      const delButton = screen.getByRole("remove-chip")
      expect(delButton).toBeInTheDocument()
      expect(delButton).toHaveClass("MuiChip-deleteIcon")

      const old_i = i
      await waitFor(() => userEvent.click(delButton))
      expect(i).toBe(old_i + 1)
    })
  })
})
