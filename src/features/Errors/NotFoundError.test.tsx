import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFoundError from "./NotFoundError"
import { MockAuthProvider } from "common/utils/testing"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useParams: () => ({
      name: "order",
    }),
    useLocation: () => ({
      pathname: "/information/order",
    }),
  }
})

describe("Errors/NotFoundError", () => {
  describe("initial render", () => {
    it("renders add page button when authorized", () => {
      render(
        <MockAuthProvider mocks={[]} validToken>
          <BrowserRouter>
            <NotFoundError error="Page Not Found" />
          </BrowserRouter>
        </MockAuthProvider>,
      )
      expect(screen.getByText(/Page Not Found/)).toBeInTheDocument()
      expect(screen.getByText(/Add a page to this route/)).toBeInTheDocument()
    })

    it("does not show add page button when unauthorized", () => {
      render(
        <MockAuthProvider mocks={[]} validToken={false}>
          <BrowserRouter>
            <NotFoundError error="Page Not Found" />
          </BrowserRouter>
        </MockAuthProvider>,
      )
      expect(screen.getByText(/Page Not Found/)).toBeInTheDocument()
      expect(
        screen.queryByText(/Add a page to this route/),
      ).not.toBeInTheDocument()
    })
  })
})
