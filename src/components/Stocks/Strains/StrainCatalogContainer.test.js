import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import Grid from "@material-ui/core/Grid"
import StrainCatalogContainer, {
  GET_STRAIN_LIST,
} from "./StrainCatalogContainer"
import StockDetailsHeader from "../StockDetailsHeader"
import StrainCatalogTable from "./StrainCatalogTable"
import StockDetailsLoader from "../StockDetailsLoader"
import GraphQLErrorPage from "components/GraphQLErrorPage"
import { Query } from "react-apollo"

const mockStore = configureMockStore()
const store = mockStore({})

describe("Stocks/Strains/StrainCatalogContainer", () => {
  const props = {
    classes: {},
  }
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST,
          variables: {
            cursor: 0,
          },
        },
        result: {
          data: {
            listStrains: {
              totalCount: 1,
              nextCursor: 123456,
              strains: [
                {
                  id: "DBS0238532",
                  label: "γS13",
                  summary: "Radiation-sensitive mutant.",
                  in_stock: true,
                },
              ],
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <StrainCatalogContainer {...props} />
        </Provider>
      </MockedProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
    it("renders Loading component first", () => {
      expect(wrapper.find(StockDetailsLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(StockDetailsHeader)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogTable)).toHaveLength(1)
    })
  })
  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST,
          variables: {
            cursor: 0,
          },
        },
        result: {
          errors: [
            {
              message: "Strains not found",
              path: [],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <StrainCatalogContainer {...props} />
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
