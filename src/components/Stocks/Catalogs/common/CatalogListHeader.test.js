import React from "react"
import { mount } from "enzyme"
import CatalogListHeader from "./CatalogListHeader"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import { StrainCatalogProvider } from "components/Stocks/Catalogs/Strains/StrainCatalogContext"

describe("Stocks/Catalogs/common/CatalogListHeader", () => {
  describe("initial render without checked items", () => {
    const props = {
      checkedItems: [],
      stockType: "strain",
    }
    const wrapper = mount(
      <StrainCatalogProvider>
        <CatalogListHeader {...props} />
      </StrainCatalogProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
      expect(wrapper.find(ListItem)).toHaveLength(1)
      // expect(wrapper.find(Grid)).toHaveLength(6)
      // expect(wrapper.find(Hidden)).toHaveLength(4)
      // expect(wrapper.find(Checkbox)).toHaveLength(0)
      // expect(wrapper.find(AddToCartButton)).toHaveLength(0)
      // expect(wrapper.find(IconButton)).toHaveLength(0)
      // expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0)
    })
  })

  // describe("initial render with checked items", () => {
  //   const props = {
  //     checkedItems: [
  //       {
  //         id: "DBS1234",
  //         label: "test strain",
  //         summary: "test summary",
  //       },
  //     ],
  //     stockType: "strain",
  //   }
  //   const wrapper = mount(
  //     <StrainCatalogProvider>
  //       <CatalogListHeader {...props} />
  //     </StrainCatalogProvider>,
  //   )
  //   it("renders without crashing", () => {
  //     expect(wrapper).toHaveLength(1)
  //   })
  //   it("always renders initial components", () => {
  //     expect(wrapper.find(List)).toHaveLength(1)
  //     expect(wrapper.find(ListItem)).toHaveLength(1)
  //     expect(wrapper.find(Grid)).toHaveLength(2)
  //     expect(wrapper.find(Hidden)).toHaveLength(1)
  //     expect(wrapper.find(Checkbox)).toHaveLength(1)
  //     expect(wrapper.find(AddToCartButton)).toHaveLength(1)
  //     expect(wrapper.find(IconButton)).toHaveLength(1)
  //     expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
  //   })
  // })
})
