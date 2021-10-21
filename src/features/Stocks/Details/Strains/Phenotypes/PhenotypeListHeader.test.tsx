import React from "react"
import { render, screen } from "@testing-library/react"
import PhenotypeListHeader from "./PhenotypeListHeader"

describe("Stocks/Details/Strains/Phenotypes/PhenotypeListHeader", () => {
  describe("initial render", () => {
    it("should render grid", () => {
      render(<PhenotypeListHeader />)
      expect(screen.getByText(/Phenotype/)).toBeInTheDocument()
      expect(screen.getByText(/Notes/)).toBeInTheDocument()
      expect(screen.getByText(/Assay/)).toBeInTheDocument()
    })
  })
})
