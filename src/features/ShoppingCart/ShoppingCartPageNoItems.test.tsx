import React from "react"
import { shallow } from "enzyme"
import ShoppingCartPageNoItems from "./ShoppingCartPageNoItems"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("ShoppingCart/ShoppingCartPageNoItems", () => {
  describe("initial render", () => {
    const wrapper = shallow(<ShoppingCartPageNoItems />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(Link)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
