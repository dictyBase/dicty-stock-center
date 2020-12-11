import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StrainDetailsCardHeader from "./StrainDetailsCardHeader"
import { MockCartProvider } from "common/utils/testing"

describe("features/Stocks/Details/Strains/StrainDetailsCardHeader", () => {
  const handleChangeSpy = jest.fn()
  const props = {
    value: 0,
    handleChange: handleChangeSpy,
    phenotypeLength: 3,
    cartData: {
      id: "DBS123456",
      name: "test1",
      summary: "this is the best test strain in the world",
      type: "strain" as const,
    },
    inStock: true,
  }

  describe("initial render", () => {
    it("renders expected tabs", () => {
      render(
        <MockCartProvider addedItems={[]} mocks={[]}>
          <StrainDetailsCardHeader {...props} />
        </MockCartProvider>,
      )
      const tabs = screen.getAllByRole("tab")
      expect(tabs).toHaveLength(2)
      expect(
        screen.getByRole("tab", { name: "Strain Details" }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("tab", { name: "Phenotypes 3" }),
      ).toBeInTheDocument()
    })
  })
  describe("tab interaction", () => {
    it("calls handleChange on tab click", () => {
      render(
        <MockCartProvider addedItems={[]} mocks={[]}>
          <StrainDetailsCardHeader {...props} />
        </MockCartProvider>,
      )
      const phenotypeTab = screen.getByRole("tab", { name: "Phenotypes 3" })
      userEvent.click(phenotypeTab)
      expect(handleChangeSpy).toHaveBeenCalledTimes(1)
    })
  })
})
