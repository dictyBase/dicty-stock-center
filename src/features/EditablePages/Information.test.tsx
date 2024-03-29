import React from "react"
import { render, screen } from "@testing-library/react"
import Information, { informationLinks } from "./Information"
import { MockAuthProvider } from "common/utils/testing"

describe("features/EditablePages/Information", () => {
  test("displays list of links", () => {
    render(
      <MockAuthProvider mocks={[]} validToken>
        <Information />
      </MockAuthProvider>,
    )
    informationLinks.forEach((item) =>
      expect(screen.getByRole("link", { name: item.name })).toBeInTheDocument(),
    )
  })

  test("displays add page button for authorized user", () => {
    render(
      <MockAuthProvider mocks={[]} validToken>
        <Information />
      </MockAuthProvider>,
    )
    expect(
      screen.getByRole("button", { name: /Add new page/ }),
    ).toBeInTheDocument()
  })

  test("does not display add page button for unauthorized users", () => {
    render(
      <MockAuthProvider mocks={[]} validToken={false}>
        <Information />
      </MockAuthProvider>,
    )
    expect(
      screen.queryByRole("button", { name: /Add new page/ }),
    ).not.toBeInTheDocument()
  })
})
