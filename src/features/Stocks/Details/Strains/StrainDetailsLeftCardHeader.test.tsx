import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StrainDetailsLeftCardHeader from "./StrainDetailsLeftCardHeader"

describe("features/Stocks/Details/Strains/StrainDetailsLeftCardHeader", () => {
  const handleChangeSpy = jest.fn()
  const props = {
    species: "Dictyostelium discoideum",
    value: 0,
    handleChange: handleChangeSpy,
    phenotypeLength: 3,
  }

  describe("initial render", () => {
    it("renders expected tabs", () => {
      render(<StrainDetailsLeftCardHeader {...props} />)
      const tabs = screen.getAllByRole("tab")
      expect(tabs).toHaveLength(2)
      expect(
        screen.getByRole("tab", { name: "Strain Details" }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("tab", { name: "Phenotypes (3)" }),
      ).toBeInTheDocument()
    })

    it("displays species name", () => {
      render(<StrainDetailsLeftCardHeader {...props} />)
      expect(screen.getByTestId("strain-species")).toHaveTextContent(
        props.species,
      )
    })
  })
  describe("tab interaction", () => {
    it("calls handleChange on tab click", () => {
      render(<StrainDetailsLeftCardHeader {...props} />)
      const phenotypeTab = screen.getByRole("tab", { name: "Phenotypes (3)" })
      userEvent.click(phenotypeTab)
      expect(handleChangeSpy).toHaveBeenCalledTimes(1)
    })
  })
})
