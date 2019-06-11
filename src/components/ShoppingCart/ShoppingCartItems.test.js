import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { ShoppingCartItems } from "./ShoppingCartItems"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("ShoppingCart/ShoppingCartItems", () => {
  const spy = sinon.spy()
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
    removeItem: spy,
  }
  const wrapper = shallow(<ShoppingCartItems {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Table)).toHaveLength(1)
      expect(wrapper.find(TableBody)).toHaveLength(1)
      expect(wrapper.find(TableHead)).toHaveLength(1)
      expect(wrapper.find(TableRow)).toHaveLength(3)
      expect(wrapper.find(TableCell)).toHaveLength(12)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(Link)).toHaveLength(2)
    })
  })
  describe("removing an item", () => {
    it("should remove an item on click", () => {
      const button = wrapper.find(Button).first()
      button.simulate("click")
      expect(spy.calledOnce).toBe(true)
    })
  })
})
