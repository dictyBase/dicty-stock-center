import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter, useLocation } from "react-router-dom"
import StrainCatalogContainer, {
  dispatchStrainList,
  normalizeBacterialStrainsData,
} from "./StrainCatalogContainer"
import {
  ListBacterialStrainsDocument,
  ListStrainsInventoryDocument,
  StrainListDocument,
} from "dicty-graphql-schema"
import {
  CatalogProvider,
  CatalogActionType,
} from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import {
  lastFiveStrainCatalogItems,
  mockBacterialStrains,
  availableStrains,
} from "./mockData"
import userEvent from "@testing-library/user-event"

jest.mock(
  "react-virtualized-auto-sizer",
  () =>
    ({ children }: any) =>
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

describe("Stocks/Strains/StrainCatalogContainer", () => {
  const MockComponent = ({ mocks, filter }: any) => (
    <CartProvider>
      <CatalogProvider stockType="strain">
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter>
            <StrainCatalogContainer filter={filter} />
          </BrowserRouter>
        </MockedProvider>
      </CatalogProvider>
    </CartProvider>
  )

  describe("initial render", () => {
    const listStrainMocks = [
      {
        request: {
          query: StrainListDocument,
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
    const listStrainAnnotationMocks = [
      {
        request: {
          query: ListStrainsInventoryDocument,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          data: {
            listStrainsWithAnnotation: availableStrains,
          },
        },
      },
    ]

    const bacterialStrainMocks = [
      {
        request: {
          query: ListBacterialStrainsDocument,
          variables: {
            cursor: 0,
            filter: "",
            limit: 10,
          },
        },
        result: {
          data: {
            bacterialFoodSource: mockBacterialStrains.bacterialFoodSource,
            symbioticFarmerBacterium:
              mockBacterialStrains.symbioticFarmerBacterium,
          },
        },
      },
    ]

    it("should render fetched list of all strains", async () => {
      render(<MockComponent mocks={listStrainMocks} filter="all" />)
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
      // should have 6 list items -> 5 rows of data + list header
      expect(listItems).toHaveLength(6)
    })

    it("should render expected data with available filter", async () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        search: "?filter=available",
      })
      render(
        <MockComponent mocks={listStrainAnnotationMocks} filter="available" />,
      )
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()
      // wait for data to load...
      const firstAvailableItem = await screen.findByText(
        availableStrains.strains[0].label,
      )
      expect(firstAvailableItem).toBeInTheDocument()

      const listItems = await screen.findAllByRole("listitem")
      // should have 7 list items -> 6 rows of data + list header
      expect(listItems).toHaveLength(7)
    })

    it("should render expected data with bacterial strains filter", async () => {
      ;(useLocation as jest.Mock).mockReturnValueOnce({
        search: "?filter=bacterial",
      })
      render(<MockComponent mocks={bacterialStrainMocks} filter="bacterial" />)
      // displays loading spinner first
      expect(screen.getByTestId("catalog-spinner")).toBeInTheDocument()
      // wait for data to load...
      const firstAvailableItem = await screen.findByText(
        mockBacterialStrains.bacterialFoodSource.strains[0].label,
      )
      expect(firstAvailableItem).toBeInTheDocument()
    })
  })

  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: StrainListDocument,
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
      render(<MockComponent mocks={mocks} filter="all" />)
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

  describe("dispatchStrainList function", () => {
    it("should dispatch regular strains", () => {
      const mockDispatch = jest.fn()
      dispatchStrainList(mockDispatch, "regular")
      expect(mockDispatch).toHaveBeenCalledTimes(2)
      expect(mockDispatch).toHaveBeenCalledWith({
        type: CatalogActionType.SET_QUERY,
        payload: StrainListDocument,
      })
      expect(mockDispatch).toHaveBeenCalledWith({
        type: CatalogActionType.SET_QUERY_VARIABLES,
        payload: {
          cursor: 0,
          limit: 10,
          filter: "name!~GWDI;label!=AX4",
        },
      })
    })

    it("should dispatch gwdi strains", () => {
      const mockDispatch = jest.fn()
      dispatchStrainList(mockDispatch, "gwdi")
      expect(mockDispatch).toHaveBeenCalledTimes(2)
      expect(mockDispatch).toHaveBeenCalledWith({
        type: CatalogActionType.SET_QUERY,
        payload: StrainListDocument,
      })
      expect(mockDispatch).toHaveBeenCalledWith({
        type: CatalogActionType.SET_QUERY_VARIABLES,
        payload: {
          cursor: 0,
          limit: 10,
          filter: "name=~GWDI",
        },
      })
    })
  })

  describe("strains dropdown and chips", () => {
    const listStrainMocks = [
      {
        request: {
          query: StrainListDocument,
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

    it("should have appbar-dropdown", () => {
      render(<MockComponent mocks={listStrainMocks} filter="all" />)
      expect(screen.getByRole("appbar-dropdown")).toBeInTheDocument()
    })

    it("should have 1 chip for filter=regular", () => {
      render(<MockComponent mocks={listStrainMocks} filter="regular" />)
      expect(screen.getAllByRole("chip")).toHaveLength(1)
    })

    it("should have no chips for filter=available", () => {
      render(<MockComponent mocks={listStrainMocks} filter="available" />)
      expect(screen.queryAllByRole("chip")).toHaveLength(0)
    })
  })
})
