import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { ShoppingButtons } from "./ShoppingButtons"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stock/ShoppingButtons", () => {
  const addToCartSpy = sinon.spy()
  const props = {
    classes: {
      container: "",
    },
    addToCart: addToCartSpy,
    type: "strain",
    id: "DBS123456",
    name: "test1",
    inStock: true,
  }
  const wrapper = shallow(<ShoppingButtons {...props} />)
  describe("initial render", () => {
    it("renders expected initial components", () => {
      expect(wrapper.find("div")).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(Snackbar)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
    it("should not render Snackbar by default", () => {
      const snackbar = wrapper.find(Snackbar)
      expect(snackbar.prop("open")).toBe(false)
    })
  })
  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = wrapper.find("div")
      // get the outermost div
      const wrappingDiv = divs.first()
      // verify that wrappingDiv contains everything else this component renders
      expect(wrappingDiv.children()).toEqual(wrapper.children())
    })
  })
  describe("when first Button is clicked", () => {
    it("should call addToCart function on click", () => {
      const firstButton = wrapper.find(Button).first()
      firstButton.simulate("click")
      expect(addToCartSpy.calledOnce).toBe(true)
    })
    it("should open Snackbar on click", () => {
      const firstButton = wrapper.find(Button).first()
      const snackbar = wrapper.find(Snackbar)

      firstButton.simulate("click")
      wrapper.update()
      expect(snackbar.prop("open")).toBe(true)
    })
  })
})
