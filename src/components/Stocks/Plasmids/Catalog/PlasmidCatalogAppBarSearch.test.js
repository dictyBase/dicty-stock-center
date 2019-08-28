import React from "react"
import { shallow } from "enzyme"
import PlasmidCatalogAppBarSearch from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch", () => {
  describe("initial render", () => {
    const wrapper = shallow(<PlasmidCatalogAppBarSearch />)
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
