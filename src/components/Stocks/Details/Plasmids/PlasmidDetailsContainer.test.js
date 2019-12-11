import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import { PlasmidDetailsContainer } from "./PlasmidDetailsContainer"
import PlasmidDetailsLeftCard from "./PlasmidDetailsLeftCard"
import PlasmidDetailsRightColumn from "./PlasmidDetailsRightColumn"
import DetailsHeader from "components/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import { GET_PLASMID } from "queries/queries"
import { data } from "./mockPlasmidData"

const mockStore = configureMockStore()
const store = mockStore({
  cart: {
    addedItems: [],
  },
})

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
        <Provider store={store}>
          <BrowserRouter>
            <PlasmidDetailsContainer />
          </BrowserRouter>
        </Provider>
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
      <Provider store={store}>
        <BrowserRouter>
          <MockedProvider mocks={mocks} addTypename={false}>
            <PlasmidDetailsContainer />
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
