import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { BrowserRouter } from "react-router-dom"
import wait from "waait"
import { StrainDetailsContainer } from "./StrainDetailsContainer"
import StrainDetailsLeftCard from "./StrainDetailsLeftCard"
import DetailsHeader from "components/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import { CartProvider } from "components/ShoppingCart/CartStore"
import { GET_STRAIN } from "graphql/queries"
import { data } from "./mockStrainData"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "DBS0236123",
  }),
}))

describe("Stocks/Strains/StrainDetailsContainer", () => {
  const props = {
    match: {
      params: {
        id: "DBS0236123",
      },
    },
  }
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN,
          variables: { id: props.match.params.id },
        },
        result: {
          data: {
            strain: data,
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CartProvider>
          <BrowserRouter>
            <StrainDetailsContainer {...props} />
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
      expect(wrapper.find(StrainDetailsLeftCard)).toHaveLength(1)
    })
  })
  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN,
          variables: {
            id: "DBS999999",
          },
        },
        result: {
          errors: [
            {
              message: "could not find strain with ID DBS999999",
              path: ["strain"],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CartProvider>
          <BrowserRouter>
            <StrainDetailsContainer {...props} />
          </BrowserRouter>
        </CartProvider>
      </MockedProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
