import React from "react"
import { render, screen } from "@testing-library/react"
import { InMemoryCache } from "@apollo/client"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import PhenotypeContainer from "./PhenotypeContainer"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries/stocks/lists"
import { first50, second50, lastItems } from "./mockData"
import { listStrainsWithAnnotationPagination } from "common/graphql/pagination"
import { MockAuthProvider } from "common/utils/testing"

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
  beforeEach(() => {
    mockObserve = jest.fn()
    mockUnobserve = jest.fn()
  })
  beforeAll(() => {
    window.IntersectionObserver = jest.fn((callback, options) => ({
      observe: mockObserve,
      unobserve: mockUnobserve,
    }))
    jest.setTimeout(30000)
  })

  describe("initial render with small data set", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 50,
            type: "phenotype",
            annotation: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithAnnotation: {
              totalCount: 10,
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
      const firstRow = await screen.findByText(first50[0].label)
      expect(firstRow).toBeInTheDocument()
      const lastRow = await screen.findByText(first50[9].label)
      expect(lastRow).toBeInTheDocument()

      const row11 = screen.queryByText(first50[10].label)
      expect(row11).toBeFalsy()

      const listItems = await screen.findAllByRole("listitem")
      // should have 11 list items -> 10 rows of data + list header
      expect(listItems).toHaveLength(11)
      expect(screen.getByText(/Displaying 10 results/)).toBeInTheDocument()
    })
  })

  describe("initial render with large data set", () => {
    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            listStrainsWithAnnotation: listStrainsWithAnnotationPagination(),
          },
        },
      },
    })
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 50,
            type: "phenotype",
            annotation: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithAnnotation: {
              totalCount: 50,
              nextCursor: 123456,
              strains: first50,
            },
          },
        },
      },
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 123456,
            limit: 50,
            type: "phenotype",
            annotation: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithAnnotation: {
              totalCount: 50,
              nextCursor: 987654,
              strains: second50,
            },
          },
        },
      },
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 987654,
            limit: 50,
            type: "phenotype",
            annotation: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithAnnotation: {
              totalCount: 3,
              nextCursor: 0,
              strains: lastItems,
            },
          },
        },
      },
    ]
    it("should only render first 50 results when intersection observer is not visible", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
          <BrowserRouter>
            <PhenotypeContainer />
          </BrowserRouter>
        </MockedProvider>,
      )

      // displays loading skeleton first
      expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()

      // wait for data to load...
      const firstRow = await screen.findByText(first50[0].label)
      expect(firstRow).toBeInTheDocument()
      const lastRow = await screen.findByText(first50[49].label)
      expect(lastRow).toBeInTheDocument()

      const row51 = screen.queryByText(second50[0].label)
      expect(row51).toBeFalsy()

      const listItems = await screen.findAllByRole("listitem")
      // should have 51 list items -> 50 rows of data + list header
      expect(listItems).toHaveLength(51)

      expect(screen.getByText(/Displaying 50 results/)).toBeInTheDocument()
    })

    it("should render next 50 results when intersection observer is visible", async () => {
      window.IntersectionObserver = jest.fn((callback, options) => {
        callback([{ isIntersecting: true }])
        return {
          observe: mockObserve,
          unobserve: mockUnobserve,
        }
      })
      render(
        <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
          <BrowserRouter>
            <PhenotypeContainer />
          </BrowserRouter>
        </MockedProvider>,
      )

      // next 50 results should be included since isIntersecting is true
      const firstRowSecondSet = await screen.findByText(second50[0].label)
      expect(firstRowSecondSet).toBeInTheDocument()
      const finalItem = await screen.findByText(lastItems[2].label)
      expect(finalItem).toBeInTheDocument()

      const listItems = await screen.findAllByRole("listitem")
      expect(listItems).toHaveLength(104) // 103 items + 1 header row
      expect(screen.getByText(/Displaying 103 results/)).toBeInTheDocument()
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
            type: "phenotype",
            annotation: "abolished protein phosphorylation",
          },
        },
        result: {
          errors: [
            {
              message: "Page Not Found",
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
        <MockAuthProvider mocks={mocks}>
          <BrowserRouter>
            <PhenotypeContainer />
          </BrowserRouter>
        </MockAuthProvider>,
      )
      // displays loading skeleton first
      expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()

      // wait for error message to load...
      const errorMsg = await screen.findByText(/Page Not Found/)
      expect(errorMsg).toBeInTheDocument()
    })
  })
})
