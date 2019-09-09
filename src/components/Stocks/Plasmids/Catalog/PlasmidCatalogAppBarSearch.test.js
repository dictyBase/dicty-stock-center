import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogAppBarSearch from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PlasmidCatalogProvider } from "./PlasmidCatalogContext"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <PlasmidCatalogProvider>
        <PlasmidCatalogAppBarSearch />
      </PlasmidCatalogProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(FormControl)).toHaveLength(1)
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
