import React from "react"
import { render, screen } from "@testing-library/react"
import Information, { informationLinks } from "./Information"
import { BrowserRouter as Router } from "react-router-dom"

describe("features/EditablePages/Information", () => {
  test("displays list of links", () => {
    render(
      <Router>
        <Information />
      </Router>,
    )
    informationLinks.forEach((item) =>
      expect(screen.getByText(item.name)).toBeInTheDocument(),
    )
  })
})
