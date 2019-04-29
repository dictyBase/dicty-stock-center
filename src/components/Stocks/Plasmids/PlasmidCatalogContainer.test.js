import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import Grid from "@material-ui/core/Grid"
import PlasmidCatalogContainer, {
  GET_PLASMID_LIST,
} from "./PlasmidCatalogContainer"
import StockDetailsHeader from "../StockDetailsHeader"
import PlasmidCatalogTable from "./PlasmidCatalogTable"
import StockDetailsLoader from "../StockDetailsLoader"
import GraphQLErrorPage from "components/GraphQLErrorPage"
import { Query } from "react-apollo"

const mockStore = configureMockStore()
const store = mockStore({})

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
  const props = {
    classes: {},
  }
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID_LIST,
          variables: {
            cursor: 0,
          },
        },
        result: {
          data: {
            listPlasmids: {
              totalCount: 1,
              nextCursor: 123456,
              plasmids: [
                {
                  id: "502",
                  name: "(Myc)2-apm1",
                  summary:
                    "KpnI-myc-BglII-myc-SacI-BamHI-apm1-XhoI-NsiI-myc-stop (in pDXD-3C) No visible structure in IFs.",
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
          <PlasmidCatalogContainer {...props} />
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
      expect(wrapper.find(PlasmidCatalogTable)).toHaveLength(1)
    })
  })
  describe("error", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID_LIST,
          variables: {
            cursor: 0,
          },
        },
        result: {
          errors: [
            {
              message: "Plasmids not found",
              path: [],
              extensions: [{ code: "NotFound" }],
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <PlasmidCatalogContainer {...props} />
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
