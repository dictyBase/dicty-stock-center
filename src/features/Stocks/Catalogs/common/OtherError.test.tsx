import { render, screen } from "@testing-library/react"
import OtherError from "features/Errors/OtherError"
import { MemoryRouter, Router } from "react-router"
import { CatalogProvider } from "../context/CatalogContext"

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
