import { render, screen, waitFor } from "@testing-library/react"
import { useNavigate } from "react-router-dom"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { CatalogProvider } from "../../context/CatalogContext"
import AppBarHelp from "./AppBarHelp"
import userEvent from "@testing-library/user-event"

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=regular",
    }),
    useNavigate: jest.fn(),
  }
})
const mockSetHelpDialogOpen = jest.fn()

jest.mock("features/Stocks/Catalogs/context/useCatalogDispatch")
const mockedUseCatalogDispatch = useCatalogDispatch as jest.Mock
mockedUseCatalogDispatch.mockReturnValue({
  setHelpDialogOpen: mockSetHelpDialogOpen,
})

jest.mock("features/Stocks/Catalogs/context/useCatalogStore")
const mockedUseCatalogStore = useCatalogStore as jest.Mock
mockedUseCatalogStore.mockReturnValue({
  state: {
    helpDialogOpen: false,
  },
})

describe("Stocks/Catalog/common/AppBar/AppBarHelp", () => {
  const MockComponent = () => (
    <CatalogProvider stockType="strain">
      <AppBarHelp />
    </CatalogProvider>
  )
  const buttonTitle = "Catalog Help"

  beforeEach(() => {
    ;(useNavigate as jest.Mock).mockReturnValue({
      push: mockHistoryPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    it("should render button", () => {
      render(<MockComponent />)
      expect(screen.getByTitle(buttonTitle)).toBeInTheDocument()
    })

    it("should handle click", async () => {
      render(<MockComponent />)
      const button = screen.getByTitle(buttonTitle)
      await waitFor(() => userEvent.click(button))
    })
  })
})
