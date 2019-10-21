import React from "react"
import { shallow } from "enzyme"
import AppBarLeftMenu from "./AppBarLeftMenu"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"

describe("Stocks/CatalogPageItems/AppBar/AppBarLeftMenu", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
    }
    const wrapper = shallow(<AppBarLeftMenu {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(Menu)).toHaveLength(1)
    })
  })
})
