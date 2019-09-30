import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import List from "@material-ui/core/List"
import { ShoppingCartItems } from "./ShoppingCartItems"

describe("ShoppingCart/ShoppingCartItems", () => {
  const spy = sinon.spy()
  describe("initial render with both strains and plasmids", () => {
    const props = {
      classes: {},
      items: [
        {
          id: "DBS123",
          name: "test1",
          fee: "$30.00",
        },
        {
          id: "DBP456",
          name: "test2",
          fee: "$15.00",
        },
      ],
      removeItem: spy,
    }
    const wrapper = shallow(<ShoppingCartItems {...props} />)

    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
    })
  })
})
