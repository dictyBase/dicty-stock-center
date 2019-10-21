import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import Grid from "@material-ui/core/Grid"
import PlasmidDetailsContainer, { GET_PLASMID } from "./PlasmidDetailsContainer"
import PlasmidDetailsList from "./PlasmidDetailsList"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"

const mockStore = configureMockStore()
const store = mockStore({})

/**
 * Need to figure out why there is a "no more mocked responses for the query" error on receiving data
 * https://github.com/apollographql/react-apollo/issues/617
 */

describe("Stocks/Plasmids/PlasmidDetailsContainer", () => {
  console.error = jest.fn()
  const props = {
    match: {
      params: {
        id: "DBP385",
      },
    },
    classes: {},
  }
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID,
          variables: { id: props.match.params.id },
        },
        result: {
          data: {
            plasmid: {
              id: props.match.params.id,
              name: "p9124",
              summary: "this is a plasmid",
              depositor: "artv@test.com",
              dbxrefs: [],
              genes: [],
              image_map: "",
              sequence: "",
              keywords: [""],
              genbank_accession: "",
              in_stock: true,
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <BrowserRouter>
            <PlasmidDetailsContainer {...props} />
          </BrowserRouter>
        </Provider>
      </MockedProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(StockDetailsLoader)).toHaveLength(1)
    })
    xit("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(StockDetailsHeader)).toHaveLength(1)
      expect(wrapper.find(PlasmidDetailsList)).toHaveLength(1)
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
      <Provider store={store}>
        <BrowserRouter>
          <MockedProvider mocks={mocks} addTypename={false}>
            <PlasmidDetailsContainer {...props} />
          </MockedProvider>
        </BrowserRouter>
      </Provider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
