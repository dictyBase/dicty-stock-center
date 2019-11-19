import React from "react"
import { mount } from "enzyme"
import { StrainCatalogListItem } from "./StrainCatalogListItem"
import { BrowserRouter } from "react-router-dom"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
// import ListItem from "@material-ui/core/ListItem"
// import Checkbox from "@material-ui/core/Checkbox"
// import Hidden from "@material-ui/core/Hidden"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"

describe("Stocks/Strains/Catalog/StrainCatalogListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            id: "DBS1234",
            label: "test strain",
            summary: "test summary",
          },
        ],
      },
      cartItems: [
        { id: "DBS1234", label: "test strain", summary: "test summary" },
      ],
      index: 0,
      style: {},
    }
    const wrapper = mount(
      <CatalogProvider>
        <BrowserRouter>
          <StrainCatalogListItem {...props} />
        </BrowserRouter>
      </CatalogProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    // it("always renders initial components", () => {
    //   expect(wrapper.find(ListItem)).toHaveLength(1)
    //   expect(wrapper.find(Grid)).toHaveLength(7)
    //   expect(wrapper.find(Hidden)).toHaveLength(3)
    //   expect(wrapper.find(Checkbox)).toHaveLength(1)
    //   expect(wrapper.find(Typography)).toHaveLength(3)
    //   expect(wrapper.find(Link)).toHaveLength(1)
    // })
  })
})
