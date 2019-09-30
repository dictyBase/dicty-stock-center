import React from "react"
import { shallow } from "enzyme"
import PlasmidCatalogAppBarRightMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarRightMenu"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBarRightMenu", () => {
  describe("initial render", () => {
    const wrapper = shallow(<PlasmidCatalogAppBarRightMenu />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(3)
      expect(wrapper.find(Menu)).toHaveLength(1)
      expect(wrapper.find(MenuItem)).toHaveLength(2)
    })
  })
})
