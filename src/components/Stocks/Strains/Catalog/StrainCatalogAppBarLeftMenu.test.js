import React from "react"
import { shallow } from "enzyme"
import StrainCatalogAppBarLeftMenu from "components/Stocks/Strains/Catalog/StrainCatalogAppBarLeftMenu"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Strains/Catalog/StrainCatalogAppBarLeftMenu", () => {
  describe("initial render", () => {
    const wrapper = shallow(<StrainCatalogAppBarLeftMenu />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(Menu)).toHaveLength(1)
      expect(wrapper.find(MenuItem)).toHaveLength(4)
    })
  })
})
