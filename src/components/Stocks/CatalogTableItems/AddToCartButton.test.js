import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { AddToCartButton } from "./AddToCartButton"
import IconButton from "@material-ui/core/IconButton"
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
      expect(wrapper.find(IconButton)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
  describe("clicking add to cart button", () => {
    it("should call addToCart function on click", () => {
      const btn = wrapper.find(IconButton).first()
      btn.simulate("click")
      expect(addToCartSpy.calledOnce).toBe(true)
    })
  })
})
