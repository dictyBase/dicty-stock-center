import React from "react"
import { render, screen } from "@testing-library/react"
import GenotypesDisplay from "./GenotypesDisplay"

describe("common/components/GenotypesDisplay", () => {
  it("should render italicized genotypes", () => {
    const genotypes = "neoR,abc1,test2,phleoR,costanza"
    render(<GenotypesDisplay genotypes={genotypes} />)
    expect(screen.getByTestId("italicized-genotypes")).toHaveTextContent(
      "abc1,test2,costanza",
    )
    expect(screen.getByTestId("all-genotypes")).toHaveTextContent(
      "abc1,test2,costanza,neoR,phleoR",
    )
  })
  it("should not include comma at end if no drug resistances", () => {
    const genotypes = "abc1,test2,costanza"
    render(<GenotypesDisplay genotypes={genotypes} />)
    expect(screen.getByTestId("all-genotypes")).toHaveTextContent(
      "abc1,test2,costanza",
    )
  })
})
