import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { AddToCartButton } from "./AddToCartButton"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import TableCell from "@material-ui/core/TableCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/CatalogTableItems/AddToCartButton", () => {
  const addToCartSpy = sinon.spy()
  const props = {
    classes: {
      flexContainer: "",
      tableCell: "",
    },
    rowHeight: "64",
    addToCart: addToCartSpy,
    id: "DBS123456",
    label: "test1",
  }
  const wrapper = shallow(<AddToCartButton {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find(TableCell)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(Snackbar)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("Snackbar", () => {
    it("should not be visible by default", () => {
      const snackbar = wrapper.find(Snackbar)
      expect(snackbar.props().open).toBe(false)
    })
  })
  describe("clicking add to cart button", () => {
    it("should call addToCart function on click", () => {
      const btn = wrapper.find(Button)
      btn.simulate("click")
      expect(addToCartSpy.calledOnce).toBe(true)
    })
  })
})
