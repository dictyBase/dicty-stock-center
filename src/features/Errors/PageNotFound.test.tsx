import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import PageNotFound from "./PageNotFound"

describe("Errors/PageNotFound", () => {
  it("should render loader", () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
    )
    expect(screen.getByText("Page Not Found")).toBeInTheDocument()
  })
})
