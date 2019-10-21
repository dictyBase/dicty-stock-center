import React from "react"
import { mount } from "enzyme"
import StrainCatalogList from "./StrainCatalogList"
import { data } from "./mockStrainCatalogData"
import AutoSizer from "react-virtualized-auto-sizer"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/CatalogPageItems/CatalogListHeader"
import { StrainCatalogProvider } from "./StrainCatalogContext"

describe("Stocks/Strains/StrainCatalogList", () => {
  const props = {
    data: data,
  }
  const wrapper = mount(
    <StrainCatalogProvider>
      <StrainCatalogList {...props} />
    </StrainCatalogProvider>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(CatalogListHeader)).toHaveLength(1)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
  })
})
