import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import GraphQLErrorPage from "./GraphQLErrorPage"

describe("features/Errors/GraphQLErrorPage", () => {
  const networkErrProps = {
    error: {
      message: "Network error",
      networkError: {
        name: "err",
        message: "error",
      },
      graphQLErrors: [],
      extraInfo: undefined,
      name: "",
    },
  }
  const unavailableErrProps = {
    error: {
      message: "Unavailable error",
      graphQLErrors: [
        {
          message: "Currently unavailable",
          extensions: {
            code: "Unavailable",
          },
          locations: undefined,
          nodes: undefined,
          source: undefined,
          positions: undefined,
          originalError: undefined,
          name: "",
          path: undefined,
        },
      ],
      networkError: null,
      extraInfo: undefined,
      name: "",
    },
  }
  const notFoundErrProps = {
    error: {
      message: "Not found error",
      graphQLErrors: [
        {
          message: "Strain not found",
          extensions: {
            code: "NotFound",
          },
          locations: undefined,
          nodes: undefined,
          source: undefined,
          positions: undefined,
          originalError: undefined,
          name: "",
          path: undefined,
        },
      ],
      networkError: null,
      extraInfo: undefined,
      name: "",
    },
  }
  const otherErrProps = {
    error: {
      message: "Misc error",
      graphQLErrors: [
        {
          message: "misc error",
          extensions: {
            code: "Misc",
          },
          locations: undefined,
          nodes: undefined,
          source: undefined,
          positions: undefined,
          originalError: undefined,
          name: "",
          path: undefined,
        },
      ],
      networkError: null,
      extraInfo: undefined,
      name: "",
    },
  }
  describe("error handling", () => {
    const serverErrMsg = "We seem to be having server issues."
    it("renders correct component for network errors", () => {
      render(
        <BrowserRouter>
          <GraphQLErrorPage {...networkErrProps} />
        </BrowserRouter>,
      )
      expect(screen.getByText(serverErrMsg)).toBeInTheDocument()
    })
    it("renders correct component for unavailable errors", () => {
      render(
        <BrowserRouter>
          <GraphQLErrorPage {...unavailableErrProps} />
        </BrowserRouter>,
      )
      expect(screen.getByText(serverErrMsg)).toBeInTheDocument()
    })
    it("renders correct component for not found errors", () => {
      render(
        <BrowserRouter>
          <GraphQLErrorPage {...notFoundErrProps} />
        </BrowserRouter>,
      )
      expect(screen.getByText(/Not Found/)).toBeInTheDocument()
    })
    it("renders correct component for other errors", () => {
      render(
        <BrowserRouter>
          <GraphQLErrorPage {...otherErrProps} />
        </BrowserRouter>,
      )
      expect(screen.getByText(/Error/)).toBeInTheDocument()
    })
  })
})
