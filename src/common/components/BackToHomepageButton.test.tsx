import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import BackToHomepageButton from "./BackToHomepageButton"

describe("common/components/BackToHomepageButton", () => {
  it("renders one button with expected text", () => {
    render(<BackToHomepageButton />, { wrapper: BrowserRouter })
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Back to Homepage/)
  })
})
