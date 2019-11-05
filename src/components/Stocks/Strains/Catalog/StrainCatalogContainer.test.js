import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import wait from "waait"
import StrainCatalogContainer, {
  GET_STRAIN_LIST,
} from "./StrainCatalogContainer"
import StrainCatalogList from "./StrainCatalogList"
import CatalogHeader from "components/Stocks/CatalogPageItems/CatalogHeader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import CatalogErrorMessage from "components/Stocks/CatalogPageItems/CatalogErrorMessage"
import { StrainCatalogProvider } from "./StrainCatalogContext"

const mockStore = configureMockStore()
const store = mockStore({})

describe("Stocks/Strains/StrainCatalogContainer", () => {
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
      <StrainCatalogProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={store}>
            <StrainCatalogContainer />
          </Provider>
        </MockedProvider>
      </StrainCatalogProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(StockDetailsLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()

      expect(wrapper.find(CatalogHeader)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogList)).toHaveLength(1)
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
      <StrainCatalogProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={store}>
            <StrainCatalogContainer />
          </Provider>
        </MockedProvider>
      </StrainCatalogProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(CatalogErrorMessage)).toHaveLength(1)
    })
  })
})
