import React from "react"
import { render, screen } from "@testing-library/react"
import PhenotypeListItem from "./PhenotypeListItem"
import { BrowserRouter } from "react-router-dom"
import { Gene, Publication } from "dicty-graphql-schema"
import { availableStrain, strainWithPhenotype } from "mocks/mockStrain"

describe("Stocks/SearchResults/PhenotypeListItem", () => {
  describe("initial render", () => {
    const props = {
      strain: availableStrain,
    }
    it("includes expected list items", () => {
      render(
        <BrowserRouter>
          <PhenotypeListItem {...props} />
        </BrowserRouter>,
      )
      // find strain descriptor
      const label = screen.getByText(availableStrain.label)
      expect(label).toBeInTheDocument()
      // find associated genes
      const genes = availableStrain?.genes as Gene[]
      genes.forEach((item) => {
        const name = screen.getByText(item.name)
        expect(name).toBeInTheDocument()
      })
      // find pub link
      const links = screen.getAllByRole("link")
      const pubLink = links[2]
      const pub = availableStrain?.publications as Publication[]
      expect(pubLink).toHaveAttribute("href", `/publication/${pub[0].id}`)
    })
  })
  describe("render without publications", () => {
    const props = {
      strain: strainWithPhenotype,
    }
    it("should not include publications when not passed as prop", () => {
      render(
        <BrowserRouter>
          <PhenotypeListItem {...props} />
        </BrowserRouter>,
      )
      const pubDisplay = screen.queryByTestId("publication-display")
      expect(pubDisplay).toBeFalsy()
    })
  })
})
