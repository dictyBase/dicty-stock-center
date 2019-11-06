import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import PlasmidCatalogContainer, {
  GET_PLASMID_LIST,
} from "./PlasmidCatalogContainer"
import PlasmidCatalogList from "./PlasmidCatalogList"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import { PlasmidCatalogProvider } from "./PlasmidCatalogContext"

const mockStore = configureMockStore()
const store = mockStore({})

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
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
      <PlasmidCatalogProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={store}>
            <PlasmidCatalogContainer />
          </Provider>
        </MockedProvider>
      </PlasmidCatalogProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(DetailsLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(CatalogHeader)).toHaveLength(1)
      expect(wrapper.find(PlasmidCatalogList)).toHaveLength(1)
    })
  })
  describe("error handling", () => {
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
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <PlasmidCatalogProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={store}>
            <PlasmidCatalogContainer />
          </Provider>
        </MockedProvider>
      </PlasmidCatalogProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(CatalogErrorMessage)).toHaveLength(1)
    })
  })
})
