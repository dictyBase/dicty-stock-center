import React from "react"
import { render, screen } from "@testing-library/react"
import AppProviders from "./AppProviders"

describe("app/layout/AppProviders", () => {
  describe("cache initialization", () => {
    it("renders a loading spinner first", () => {
      render(<AppProviders>test component</AppProviders>)
      expect(screen.getByRole("progressbar")).toBeInTheDocument()
    })
    it("displays children after loading", async () => {
      render(<AppProviders>test component</AppProviders>)
      expect(screen.getByRole("progressbar")).toBeInTheDocument()
      const content = await screen.findByText(/test component/)
      expect(content).toBeInTheDocument()
    })
  })
})
