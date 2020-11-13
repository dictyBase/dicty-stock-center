import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import { GET_PLASMID_LIST } from "common/graphql/queries"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { lastFivePlasmidCatalogItems } from "./mockData"

jest.mock("react-virtualized-auto-sizer", () => ({ children }: any) =>
  children({ height: 535, width: 600 }),
)

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=all",
    }),
  }
})

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID_LIST,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          data: {
            listPlasmids: lastFivePlasmidCatalogItems,
          },
        },
      },
    ]
    it("should render fetched data", async () => {
      render(
        <CartProvider>
          <CatalogProvider stockType="plasmid">
            <MockedProvider mocks={mocks} addTypename={false}>
              <BrowserRouter>
                <PlasmidCatalogContainer filter="all" />
              </BrowserRouter>
            </MockedProvider>
          </CatalogProvider>
        </CartProvider>,
      )
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()
      // wait for data to load...
      const firstRow = await screen.findByText(
        lastFivePlasmidCatalogItems.plasmids[0].name,
      )
      expect(firstRow).toBeInTheDocument()
      const lastRow = await screen.findByText(
        lastFivePlasmidCatalogItems.plasmids[4].name,
      )
      expect(lastRow).toBeInTheDocument()

      const listItems = await screen.findAllByRole("listitem")
      // should have 51 list items -> 50 rows of data + list header
      expect(listItems).toHaveLength(6)
    })
  })

  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID_LIST,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          errors: [
            {
              message: "No plasmids found",
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
        <CartProvider>
          <CatalogProvider stockType="plasmid">
            <MockedProvider mocks={mocks} addTypename={false}>
              <BrowserRouter>
                <PlasmidCatalogContainer filter="all" />
              </BrowserRouter>
            </MockedProvider>
          </CatalogProvider>
        </CartProvider>,
      )
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()

      // wait for error message to load...
      const errorMsg = await screen.findByText(/No plasmids found/)
      expect(errorMsg).toBeInTheDocument()
    })
  })
})
