import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import wait from "waait"
import Grid from "@material-ui/core/Grid"
import StrainCatalogContainer, {
  GET_STRAIN_LIST,
} from "./StrainCatalogContainer"
import StrainCatalogTable from "./StrainCatalogTable"
import { Query } from "react-apollo"

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

describe("Stocks/Strains/StrainCatalogContainer", () => {
  const props = {
    classes: {},
  }
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <StrainCatalogContainer {...props} />
    </MockedProvider>,
  )
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Query)).toHaveLength(1)
    })
    // it("renders expected components after receiving data from query", async () => {
    //   await wait()
    //   wrapper.update()
    //   wrapper.debug()
    //   expect(wrapper.find(Grid)).toHaveLength(3)
    //   expect(wrapper.find(StrainCatalogTable)).toHaveLength(1)
    // })
  })
})
