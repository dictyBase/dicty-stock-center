import React from "react"
import {
  render,
  screen,
  fireEvent,
  queryByTestId,
  getAllByRole,
  waitFor,
} from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import PhenotypeContainer from "./PhenotypeContainer"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"
import { first50 } from "./mockData"

const mockParams = "abolished+protein+phosphorylation"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useParams: () => ({
      name: mockParams,
    }),
  }
})

describe("Stocks/SearchResults/PhenotypeContainer", () => {
  const window = global as any
  let mockObserve: jest.Mock
  let mockUnobserve: jest.Mock

  describe("initial render with small data set", () => {
    beforeEach(() => {
      mockObserve = jest.fn()
      mockUnobserve = jest.fn()
    })
    beforeAll(() => {
      window.IntersectionObserver = jest.fn((callback, options) => ({
        observe: mockObserve,
        unobserve: mockUnobserve,
      }))
    })

    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 50,
            phenotype: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithPhenotype: {
              totalCount: 50,
              nextCursor: 0,
              strains: first50.slice(0, 10),
            },
          },
        },
      },
    ]
    it("should render fetched data", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter>
            <PhenotypeContainer />
          </BrowserRouter>
        </MockedProvider>,
      )
      // displays loading skeleton first
      expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()

      // wait for data to load...
      const firstRow = await screen.findByText("Dd5P4-/[act15]:Hs-OCRL(D422A)")
      expect(firstRow).toBeInTheDocument()
      const lastRow = await screen.findByText("[act15]:YFP:iqgC")
      expect(lastRow).toBeInTheDocument()

      const row11 = screen.queryByText("sadA-")
      expect(row11).toBeFalsy()

      const listItems = await screen.findAllByRole("listitem")
      // should have 11 list items -> 10 rows of data + list header
      expect(listItems).toHaveLength(11)
    })
  })

  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 50,
            phenotype: "abolished protein phosphorylation",
          },
        },
        result: {
          errors: [
            {
              message: "No strains found",
              path: [],
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
    it("displays error message", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter>
            <PhenotypeContainer />
          </BrowserRouter>
        </MockedProvider>,
      )
      // displays loading skeleton first
      expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()

      // wait for error message to load...
      const errorMsg = await screen.findByText(/No strains found/)
      expect(errorMsg).toBeInTheDocument()
    })
  })
})
