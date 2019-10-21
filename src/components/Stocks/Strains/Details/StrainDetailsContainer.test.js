import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import Grid from "@material-ui/core/Grid"
import StrainDetailsContainer, { GET_STRAIN } from "./StrainDetailsContainer"
import StrainDetailsList from "./StrainDetailsList"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"

const mockStore = configureMockStore()
const store = mockStore({})

/**
 * Need to figure out why there is a "no more mocked responses for the query" error on receiving data
 * https://github.com/apollographql/react-apollo/issues/617
 */

describe("Stocks/Strains/StrainDetailsContainer", () => {
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
          query: GET_STRAIN,
          variables: { id: props.match.params.id },
        },
        result: {
          data: {
            strain: {},
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <BrowserRouter>
            <StrainDetailsContainer {...props} />
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
      expect(wrapper.find(StrainDetailsList)).toHaveLength(1)
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
        <Provider store={store}>
          <BrowserRouter>
            <StrainDetailsContainer {...props} />
          </BrowserRouter>
        </Provider>
      </MockedProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
