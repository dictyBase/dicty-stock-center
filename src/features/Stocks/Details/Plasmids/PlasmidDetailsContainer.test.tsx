import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { BrowserRouter } from "react-router-dom"
import wait from "waait"
import { PlasmidDetailsContainer } from "./PlasmidDetailsContainer"
import PlasmidDetailsLeftCard from "./PlasmidDetailsLeftCard"
import PlasmidDetailsRightColumn from "./PlasmidDetailsRightColumn"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { GET_PLASMID } from "common/graphql/queries"
import { data } from "./mockPlasmidData"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "DBS0236123",
  }),
}))

describe("Stocks/Plasmids/PlasmidDetailsContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID,
          variables: { id: "DBS0236123" },
        },
        result: {
          data: {
            plasmid: data,
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CartProvider>
          <BrowserRouter>
            <PlasmidDetailsContainer />
          </BrowserRouter>
        </CartProvider>
      </MockedProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(DetailsLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(DetailsHeader)).toHaveLength(1)
      expect(wrapper.find(PlasmidDetailsLeftCard)).toHaveLength(1)
      expect(wrapper.find(PlasmidDetailsRightColumn)).toHaveLength(1)
    })
  })
  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID,
          variables: {
            id: "DBP999999",
          },
        },
        result: {
          errors: [
            {
              message: "could not find plasmid with ID DBP999999",
              path: ["plasmid"],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <CartProvider>
        <BrowserRouter>
          <MockedProvider mocks={mocks} addTypename={false}>
            <PlasmidDetailsContainer />
          </MockedProvider>
        </BrowserRouter>
      </CartProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
