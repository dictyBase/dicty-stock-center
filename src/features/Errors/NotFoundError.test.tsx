import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFoundError from "./NotFoundError"

describe("features/Errors/NotFoundError", () => {
  test("displays not found header", () => {
    render(
      <BrowserRouter>
        <NotFoundError error="Page Not Found" />
      </BrowserRouter>,
    )

    expect(
      screen.getByRole("heading", { name: "Not Found" }),
    ).toBeInTheDocument()
  })
})
