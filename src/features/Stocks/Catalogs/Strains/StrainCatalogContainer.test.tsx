import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import wait from "waait"
import StrainCatalogContainer from "./StrainCatalogContainer"
import StrainCatalogList from "./StrainCatalogList"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import { GET_STRAIN_LIST } from "common/graphql/queries"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("Stocks/Strains/StrainCatalogContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST,
          variables: {
            cursor: 0,
            filter: "",
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
      <CartProvider>
        <CatalogProvider>
          <MockedProvider mocks={mocks} addTypename={false}>
            <StrainCatalogContainer />
          </MockedProvider>
        </CatalogProvider>
      </CartProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(DetailsLoader)).toHaveLength(1)
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
            filter: "",
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
      <CartProvider>
        <CatalogProvider>
          <MockedProvider mocks={mocks} addTypename={false}>
            <StrainCatalogContainer />
          </MockedProvider>
        </CatalogProvider>
      </CartProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(CatalogErrorMessage)).toHaveLength(1)
    })
  })
})
