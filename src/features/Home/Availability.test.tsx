import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import Availability from "./Availability"
import { GET_STOCK_TOTALS } from "common/graphql/queries/stocks/lists"

jest.mock("@apollo/client", () => {
  const originalModule = jest.requireActual("@apollo/client")
  return {
    ...originalModule,
    useQuery: (query: any, options: any) =>
      jest.requireActual("@apollo/client").useQuery(query, {
        ...options,
        fetchPolicy: "network-only",
      }),
  }
})

describe("features/Home/Availability", () => {
  const MockComponent = ({ mocks }: any) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <BrowserRouter>
        <Availability />
      </BrowserRouter>
    </MockedProvider>
  )
  describe("initial render", () => {
    it("should render expected stock totals", async () => {
      const mocks = [
        {
          request: {
            query: GET_STOCK_TOTALS,
            variables: { limit: 100000 },
          },
          result: {
            data: {
              listPlasmids: {
                totalCount: 900,
              },
              listStrains: {
                totalCount: 26000,
              },
            },
          },
        },
      ]
      render(<MockComponent mocks={mocks} />)
      // displays loading skeleton first
      expect(screen.getByTestId("panel-loader")).toBeInTheDocument()
      // wait for data to load...
      const headers = await screen.findAllByRole("heading")
      expect(headers[0]).toHaveTextContent("Strain & Plasmid Availability")
      expect(headers[1]).toHaveTextContent("26000 Strains")
      expect(headers[2]).toHaveTextContent("900 Plasmids")
    })
  })
  describe("error handling", () => {
    it("handles errors as expected", async () => {
      const mocks = [
        {
          request: {
            query: GET_STOCK_TOTALS,
            variables: { limit: 100000 },
          },
          result: {
            errors: [
              {
                message: "could not get list",
                path: ["stocks"],
                extensions: { code: "NotFound" },
                locations: undefined,
                nodes: undefined,
                source: undefined,
                positions: undefined,
                originalError: undefined,
                name: "",
              },
            ],
          },
        },
      ]

      render(<MockComponent mocks={mocks} />)
      // displays spinner first
      expect(screen.getByTestId("panel-loader")).toBeInTheDocument()
      const errMsg = await screen.findByText(
        "Error fetching number of strains and plasmids",
      )
      expect(errMsg).toBeInTheDocument()
    })
  })
})
