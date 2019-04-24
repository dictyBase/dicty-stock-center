import React from "react"
import { shallow } from "enzyme"
import ShippingMethod from "./ShippingMethod"
import Grid from "@material-ui/core/Grid"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "../TextField"

describe("OrderForm/Shipping/ShippingMethod", () => {
  const props = {
    classes: {
      requiredText: "requiredText",
      innerForm: "innerForm",
    },
  }
  const wrapper = shallow(<ShippingMethod {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(3)
      expect(wrapper.dive().find(TextField)).toHaveLength(1)
      expect(wrapper.dive().find(RadioGroup)).toHaveLength(1)
      expect(wrapper.dive().find(FormControlLabel)).toHaveLength(4)
    })
  })
})
