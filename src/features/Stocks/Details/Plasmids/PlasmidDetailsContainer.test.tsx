import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter } from "react-router-dom"
import PlasmidDetailsContainer from "./PlasmidDetailsContainer"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { GET_PLASMID } from "common/graphql/queries/stocks/details"
import { availablePlasmid } from "./mockPlasmidData"

const mockID = "DBP0236123"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")

  return {
    ...originalModule,
    useParams: () => ({
      id: mockID,
    }),
  }
})

describe("features/Stocks/Plasmids/PlasmidDetailsContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID,
          variables: { id: mockID },
        },
        result: {
          data: {
            plasmid: availablePlasmid,
          },
        },
      },
    ]

    const MockComponent = ({ mocks }: any) => {
      return (
        <MockedProvider mocks={mocks} addTypename={false}>
          <CartProvider>
            <BrowserRouter>
              <PlasmidDetailsContainer />
            </BrowserRouter>
          </CartProvider>
        </MockedProvider>
      )
    }

    it("displays expected data", async () => {
      render(<MockComponent mocks={mocks} />)
      // displays loading skeleton first
      expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()
      // wait for data to load...
      const strain = await screen.findByRole("heading", {
        name: availablePlasmid.name,
      })
      expect(strain).toBeInTheDocument()
    })
  })
})
