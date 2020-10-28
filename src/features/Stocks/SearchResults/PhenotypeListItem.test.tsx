import React from "react"
import { render, screen } from "@testing-library/react"
import PhenotypeListItem from "./PhenotypeListItem"
import { BrowserRouter } from "react-router-dom"

describe("Stocks/SearchResults/PhenotypeListItem", () => {
  describe("initial render", () => {
    const props = {
      strain: {
        genes: ["abcd"],
        id: "DBS123456",
        label: "test1",
        publications: [
          {
            id: "20008082",
            pub_date: "2009-12-11T00:00:00.000Z",
            title:
              "WD repeat domain of Dictyostelium myosin heavy chain kinase C functions in both substrate targeting and cellular localization.",
            journal: "Eukaryotic cell",
            volume: "9",
            pages: "344-349",
            authors: [
              {
                last_name: "Franklin",
              },
              {
                last_name: "Hyatt",
              },
              {
                last_name: "Chowdhury",
              },
              {
                last_name: "Steimle",
              },
            ],
          },
        ],
      },
    }
    it("includes expected list items", () => {
      render(
        <BrowserRouter>
          <PhenotypeListItem {...props} />
        </BrowserRouter>,
      )
      // find strain descriptor
      const label = screen.getByText(/test1/)
      expect(label).toBeInTheDocument()
      // find associated genes
      const gene = screen.getByText(/abcd/)
      expect(gene).toBeInTheDocument()
      // find pub link
      const links = screen.getAllByRole("link")
      const pubLink = links[2]
      expect(pubLink).toHaveAttribute("href", "/publication/20008082")
    })
  })
  describe("render without publications", () => {
    const props = {
      strain: {
        genes: ["abcd"],
        id: "DBS123456",
        label: "counting strain",
        publications: [],
      },
    }
    it("should not include publications when not passed as prop", () => {
      render(
        <BrowserRouter>
          <PhenotypeListItem {...props} />
        </BrowserRouter>,
      )
      const pubDisplay = screen.queryByTestId("phenotype-publication-display")
      expect(pubDisplay).toBeFalsy()
    })
  })
})
