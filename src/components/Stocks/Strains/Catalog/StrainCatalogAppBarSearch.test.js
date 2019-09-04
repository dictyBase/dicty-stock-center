import React from "react"
import { mount } from "enzyme"
import StrainCatalogAppBarSearch from "components/Stocks/Strains/Catalog/StrainCatalogAppBarSearch"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StrainCatalogProvider } from "./StrainCatalogContext"

describe("Stocks/Strains/Catalog/StrainCatalogAppBarSearch", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <StrainCatalogProvider>
        <StrainCatalogAppBarSearch />
      </StrainCatalogProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.find(InputBase)).toHaveLength(1)
    })
  })
})
