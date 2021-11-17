import { render, screen } from "@testing-library/react"
import React from "react"
import SubmitError from "./SubmitError"

describe("features/OrderForm/Submit/SubmitError", () => {
  it("should render error", () => {
    render(<SubmitError />)
    expect(screen.getByText(/There was an error +?/)).toBeInTheDocument()
  })
})
