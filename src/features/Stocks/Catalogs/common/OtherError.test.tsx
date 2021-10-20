import { render, screen } from "@testing-library/react"
import OtherError from "features/Errors/OtherError"
import { MemoryRouter } from "react-router"

describe("Stocks/Catalog/common/OtherError", () => {
  const MockComponent = () => (
    <MemoryRouter>
      <OtherError />
    </MemoryRouter>
  )

  describe("initial render", () => {
    it("should render error component", () => {
      render(<MockComponent />)
      expect(screen.getByText("Back to DSC Homepage")).toBeInTheDocument()
    })
  })
})
