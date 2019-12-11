import React from "react"
import { shallow } from "enzyme"
import { ShoppingCartPage } from "./ShoppingCartPage"
import Grid from "@material-ui/core/Grid"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import ShoppingCartPageNoItems from "./ShoppingCartPageNoItems"

describe("ShoppingCart/ShoppingCartPage", () => {
  describe("initial render with items", () => {
    const props = {
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
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(ShoppingCartPageWithItems)).toHaveLength(1)
      expect(wrapper.find(ShoppingCartPageNoItems)).toHaveLength(0)
    })
  })
  describe("initial render without items", () => {
    const props = {
      items: [],
    }
    const wrapper = shallow(<ShoppingCartPage {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(ShoppingCartPageNoItems)).toHaveLength(1)
      expect(wrapper.find(ShoppingCartPageWithItems)).toHaveLength(0)
    })
  })
})
