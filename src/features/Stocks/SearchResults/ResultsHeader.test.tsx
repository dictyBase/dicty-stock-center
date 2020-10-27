import React from "react"
import { render, screen } from "@testing-library/react"
import ResultsHeader from "./ResultsHeader"

describe("Stocks/SearchResults/ResultsHeader", () => {
  const props = {
    property: "Phenotype",
    description: "abolished protein phosphorylation",
  }
  render(<ResultsHeader {...props} />)
  describe("initial render", () => {
    it("renders header with expected text", () => {
      const header = screen.getByRole("heading")
      expect(header).toHaveTextContent(
        "Phenotype Search Results for abolished protein phosphorylation",
      )
    })
  })
})
