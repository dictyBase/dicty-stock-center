import React from "react"
import { shallow } from "enzyme"
import { ShoppingButtons } from "./ShoppingButtons"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// needs coverage for 67,68,69

describe("Stock/ShoppingButtons", () => {
  const props = {
    classes: {
      container: "",
    },
    addToCart: () => {},
    type: "strain",
    id: "DBS123456",
    name: "test1",
    inStock: true,
  }
  const wrapper = shallow(<ShoppingButtons {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find("div")).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(Snackbar)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
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
  describe("Snackbar", () => {
    it("should not be visible by default", () => {
      const snackbar = wrapper.find(Snackbar)
      expect(snackbar.props().open).toBe(false)
    })
  })
  // describe("when first Button is clicked", () => {
  //   it("should toggle Snackbar's open state when clicking Add to Cart button", () => {
  //     const firstButton = wrapper.find(Button).first()
  //     const snackbar = wrapper.find(Snackbar)

  //     firstButton.simulate("click")
  //     expect(snackbar.props().open).toBe(true)

  //     firstButton.simulate("click")
  //     expect(snackbar.props().open).toBe(false)
  //   })
  // })
})
