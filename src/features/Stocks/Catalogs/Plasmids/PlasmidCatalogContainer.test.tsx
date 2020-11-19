import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import { BrowserRouter, useLocation } from "react-router-dom"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import {
  GET_PLASMID_INVENTORY_LIST,
  GET_PLASMID_LIST,
} from "common/graphql/queries/stocks/lists"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { lastFivePlasmidCatalogItems, availablePlasmids } from "./mockData"

jest.mock("react-virtualized-auto-sizer", () => ({ children }: any) =>
  children({ height: 535, width: 600 }),
)

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: jest.fn().mockReturnValue({
      location: () => ({
        search: "?filter=all",
      }),
    }),
  }
})

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
  const theme = createMuiTheme({
    props: { MuiWithWidth: { initialWidth: "lg" } },
  })
  const MockComponent = ({ mocks, filter }: any) => (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CatalogProvider stockType="plasmid">
          <MockedProvider mocks={mocks} addTypename={false}>
            <BrowserRouter>
              <PlasmidCatalogContainer filter={filter} />
            </BrowserRouter>
          </MockedProvider>
        </CatalogProvider>
      </CartProvider>
    </ThemeProvider>
  )

  describe("initial render", () => {
    const listPlasmidMocks = [
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
    const listPlasmidAnnotationMocks = [
      {
        request: {
          query: GET_PLASMID_INVENTORY_LIST,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          data: {
            listPlasmidsWithAnnotation: availablePlasmids,
          },
        },
      },
    ]
    it("should render fetched list of all plasmids", async () => {
      render(<MockComponent mocks={listPlasmidMocks} filter="all" />)
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
      // should have 6 list items -> 5 rows of data + list header
      expect(listItems).toHaveLength(6)
    })

    it("should render expected data with available filter", async () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        search: "?filter=available",
      })
      render(
        <MockComponent mocks={listPlasmidAnnotationMocks} filter="available" />,
      )
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()
      // wait for data to load...
      const firstAvailableItem = await screen.findByText(
        availablePlasmids.plasmids[0].name,
      )
      expect(firstAvailableItem).toBeInTheDocument()

      const listItems = await screen.findAllByRole("listitem")
      // should have 4 list items -> 3 rows of data + list header
      expect(listItems).toHaveLength(4)
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
      render(<MockComponent mocks={mocks} filter="all" />)
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()

      // wait for error message to load...
      const errorMsg = await screen.findByText(/No plasmids found/)
      expect(errorMsg).toBeInTheDocument()
    })
  })
})
