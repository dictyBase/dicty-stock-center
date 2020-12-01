import React from "react"
import { render, screen } from "@testing-library/react"
import AvailabilityCard from "./AvailabilityCard"
import {
  availableStrain,
  unavailableStrain,
} from "features/Stocks/Details/Strains/mockStrainData"
import { MockCartProvider } from "common/utils/testing"

describe("Stocks/Details/common/AvailabilityCard", () => {
  describe("available strain", () => {
    it("provides available card if in stock", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={[]}>
          <AvailabilityCard data={availableStrain} />
        </MockCartProvider>,
      )
      expect(screen.getByText(/Available/)).toBeInTheDocument()
    })
  })

  describe("unavailable strain", () => {
    it("provides unavailable card if out of stock", () => {
      render(
        <MockCartProvider mocks={[]} addedItems={[]}>
          <AvailabilityCard data={unavailableStrain} />
        </MockCartProvider>,
      )
      expect(screen.getByText(/Unavailable/)).toBeInTheDocument()
    })
  })
})
