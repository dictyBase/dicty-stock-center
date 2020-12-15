import React from "react"
import { render, screen } from "@testing-library/react"
import Information, { informationLinks } from "./Information"
import { BrowserRouter as Router } from "react-router-dom"
import { MockAuthProvider } from "common/utils/testing"

describe("features/EditablePages/Information", () => {
  test("displays list of links", () => {
    render(
      <MockAuthProvider mocks={[]} validToken>
        <Router>
          <Information />
        </Router>
      </MockAuthProvider>,
    )
    informationLinks.forEach((item) =>
      expect(screen.getByRole("link", { name: item.name })).toBeInTheDocument(),
    )
  })

  test("displays add page button for authorized user", () => {
    render(
      <MockAuthProvider mocks={[]} validToken>
        <Router>
          <Information />
        </Router>
      </MockAuthProvider>,
    )
    expect(
      screen.getByRole("button", { name: /Add new page/ }),
    ).toBeInTheDocument()
  })

  test("does not display add page button for unauthorized users", () => {
    render(
      <MockAuthProvider mocks={[]} validToken={false}>
        <Router>
          <Information />
        </Router>
      </MockAuthProvider>,
    )
    expect(
      screen.queryByRole("button", { name: /Add new page/ }),
    ).not.toBeInTheDocument()
  })
})
