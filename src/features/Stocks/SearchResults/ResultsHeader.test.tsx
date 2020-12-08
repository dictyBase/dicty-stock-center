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
      const headers = screen.getAllByRole("heading")
      expect(headers[0]).toHaveTextContent("Phenotype Search Results")
      expect(headers[1]).toHaveTextContent("abolished protein phosphorylation")
    })
  })
})
