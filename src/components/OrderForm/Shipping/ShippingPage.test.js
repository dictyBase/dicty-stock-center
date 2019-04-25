import React from "react"
import { shallow } from "enzyme"
import ShippingPage from "./ShippingPage"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Shipping/ShippingPage", () => {
  const props = {
    classes: {},
  }
  const wrapper = shallow(<ShippingPage {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    // it("always renders initial components", () => {
    //   expect(wrapper.find(Grid)).toHaveLength(6)
    //   expect(wrapper.find(TextField)).toHaveLength(3)
    // })
  })
})
