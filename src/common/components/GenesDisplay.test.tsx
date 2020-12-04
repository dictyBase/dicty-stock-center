import React from "react"
import { render, screen } from "@testing-library/react"
import GenesDisplay, { Gene } from "./GenesDisplay"

describe("Stocks/Details/common/GenesDisplay", () => {
  describe("initial render with genes", () => {
    const genes = [{ name: "sadA" }, { name: "gflB" }]
    it("renders one LinkTag for every gene", () => {
      render(<GenesDisplay genes={genes} />)
      const links = screen.getAllByRole("link")
      expect(links).toHaveLength(2)
      expect(links[0]).toHaveTextContent(/sadA/)
      expect(links[1]).toHaveTextContent(/gflB/)
    })
  })

  describe("initial render with empty gene array", () => {
    const genes = [] as Gene[]
    it("renders no LinkTags if gene list is empty", () => {
      render(<GenesDisplay genes={genes} />)
      const links = screen.queryByRole("link")
      expect(links).not.toBeInTheDocument()
    })
  })
})
