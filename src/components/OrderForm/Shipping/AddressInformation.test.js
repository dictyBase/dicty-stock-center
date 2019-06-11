import React from "react"
import { shallow } from "enzyme"
import AddressInformation from "./AddressInformation"
import Grid from "@material-ui/core/Grid"
import Select from "@material-ui/core/Select"
import TextField from "../TextField"

describe("OrderForm/Shipping/AddressInformation", () => {
  const props = {
    classes: {
      requiredText: "requiredText",
    },
    values: {
      country: "Iceland",
    },
  }
  const wrapper = shallow(<AddressInformation {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(12)
      expect(wrapper.dive().find(TextField)).toHaveLength(5)
      expect(wrapper.dive().find(Select)).toHaveLength(1)
    })
  })
})
