import React from "react"
import { render, screen } from "@testing-library/react"
import CatalogHeader from "./CatalogHeader"

describe("Stocks/CatalogPageItems/CatalogHeader", () => {
  it("displays expected text", () => {
    const props = {
      title: "Strain Catalog",
    }
    render(<CatalogHeader {...props} />)
    const header = screen.getByRole("heading")
    expect(header).toHaveTextContent(props.title)
    expect(
      screen.getByText(
        /PLEASE DO NOT ORDER FROM THIS TEST SITE. THIS IS FOR INTERNAL TESTING ONLY. THANKS!/,
      ),
    ).toBeInTheDocument()
  })
})
