import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import wait from "waait"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import PlasmidCatalogList from "./PlasmidCatalogList"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import { GET_PLASMID_LIST } from "graphql/queries"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"
import { CartProvider } from "components/ShoppingCart/CartStore"

describe("Stocks/Plasmids/PlasmidCatalogContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_PLASMID_LIST,
          variables: {
            cursor: 0,
            filter: "",
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
      <CartProvider>
        <CatalogProvider>
          <MockedProvider mocks={mocks} addTypename={false}>
            <PlasmidCatalogContainer />
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
            filter: "",
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
      <CartProvider>
        <CatalogProvider>
          <MockedProvider mocks={mocks} addTypename={false}>
            <PlasmidCatalogContainer />
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
