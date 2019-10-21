import React from "react"
import { shallow } from "enzyme"
import ContactInformation from "./ContactInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Shipping/ContactInformation", () => {
  const wrapper = shallow(<ContactInformation />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(TextField)).toHaveLength(1)
    })
  })
})
