import React from "react"
import { shallow } from "enzyme"
import { ShoppingCartPage } from "./ShoppingCartPage"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItems from "./ShoppingCartItems"

describe("ShoppingCart/ShoppingCartPage", () => {
  describe("initial render with items", () => {
    const props = {
      classes: {},
      items: [
        {
          id: "DBS123",
          name: "test1",
          fee: "$30.00",
        },
        {
          id: "DBS456",
          name: "test2",
          fee: "$30.00",
        },
      ],
    }
    const wrapper = shallow(<ShoppingCartPage {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(6)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(ShoppingCartItems)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
  describe("initial render without items", () => {
    const props = {
      classes: {},
      items: [],
    }
    const wrapper = shallow(<ShoppingCartPage {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(6)
      expect(wrapper.find(Link)).toHaveLength(2)
      expect(wrapper.find(ShoppingCartItems)).toHaveLength(0)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
