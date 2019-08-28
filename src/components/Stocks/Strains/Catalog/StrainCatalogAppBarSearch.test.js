import React from "react"
import { shallow } from "enzyme"
import StrainCatalogAppBarSearch from "components/Stocks/Strains/Catalog/StrainCatalogAppBarSearch"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Strains/Catalog/StrainCatalogAppBarSearch", () => {
  describe("initial render", () => {
    const wrapper = shallow(<StrainCatalogAppBarSearch />)
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
