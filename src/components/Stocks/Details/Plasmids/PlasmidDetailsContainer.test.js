import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import { PlasmidDetailsContainer, GET_PLASMID } from "./PlasmidDetailsContainer"
import PlasmidDetailsLeftCard from "./PlasmidDetailsLeftCard"
import PlasmidDetailsRightColumn from "./PlasmidDetailsRightColumn"
import StockDetailsHeader from "components/Stocks/Details/common/StockDetailsHeader"
import StockDetailsLoader from "components/Stocks/Details/common/StockDetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import { data } from "./mockPlasmidData"

const mockStore = configureMockStore()
const store = mockStore({})

describe("Stocks/Plasmids/PlasmidDetailsContainer", () => {
  const props = {
    match: {
      params: {
        id: "DBP385",
      },
    },
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
            plasmid: data,
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
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(StockDetailsHeader)).toHaveLength(1)
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
