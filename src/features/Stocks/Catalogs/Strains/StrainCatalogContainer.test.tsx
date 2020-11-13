import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import StrainCatalogContainer, {
  normalizeBacterialStrainsData,
} from "./StrainCatalogContainer"
import { GET_STRAIN_LIST } from "common/graphql/queries"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { lastFiveStrainCatalogItems, mockBacterialStrains } from "./mockData"

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

describe("Stocks/Strains/StrainCatalogContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          data: {
            listStrains: lastFiveStrainCatalogItems,
          },
        },
      },
    ]
    it("should render fetched data", async () => {
      render(
        <CartProvider>
          <CatalogProvider>
            <MockedProvider mocks={mocks} addTypename={false}>
              <BrowserRouter>
                <StrainCatalogContainer filter="all" />
              </BrowserRouter>
            </MockedProvider>
          </CatalogProvider>
        </CartProvider>,
      )
      // displays spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()
      // wait for data to load...
      const firstRow = await screen.findByText(
        lastFiveStrainCatalogItems.strains[0].label,
      )
      expect(firstRow).toBeInTheDocument()
      const lastRow = await screen.findByText(
        lastFiveStrainCatalogItems.strains[4].label,
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
          query: GET_STRAIN_LIST,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
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
        <CartProvider>
          <CatalogProvider>
            <MockedProvider mocks={mocks} addTypename={false}>
              <BrowserRouter>
                <StrainCatalogContainer filter="all" />
              </BrowserRouter>
            </MockedProvider>
          </CatalogProvider>
        </CartProvider>,
      )
      // displays spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()

      // wait for error message to load...
      const errorMsg = await screen.findByText(/No strains found/)
      expect(errorMsg).toBeInTheDocument()
    })
  })

  describe("normalizeBacterialStrainsData function", () => {
    it("should normalize bacterial strains data", () => {
      const convertedData = normalizeBacterialStrainsData(mockBacterialStrains)

      expect(convertedData.listStrains.totalCount).toBe(21)
      expect(convertedData.listStrains.strains).toHaveLength(21)
    })
  })
})
