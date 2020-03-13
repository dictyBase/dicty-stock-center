import React from "react"
import { shallow } from "enzyme"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItemList from "./ShoppingCartItemList"

describe("ShoppingCart/ShoppingCartPageWithItems", () => {
  describe("initial render", () => {
    const wrapper = shallow(<ShoppingCartPageWithItems />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(ShoppingCartItemList)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(2)
    })
  })
})
