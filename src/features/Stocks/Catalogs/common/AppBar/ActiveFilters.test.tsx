import { render, screen, waitFor } from "@testing-library/react"
import ActiveFilters from "./ActiveFilters"
import userEvent from "@testing-library/user-event"

describe("Stocks/Catalog//common/AppBar/AppBarSearch", () => {
  let i = 0
  const MockComponent = () => (
    <ActiveFilters filters={["Regular"]} removeFilter={() => i++} />
  )

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
