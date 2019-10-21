import React from "react"
import { shallow } from "enzyme"
import AdditionalInformation from "./AdditionalInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Shipping/AdditionalInformation", () => {
  const wrapper = shallow(<AdditionalInformation />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(TextField)).toHaveLength(1)
    })
  })
})
