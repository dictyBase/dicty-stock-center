import React from "react"
import { shallow } from "enzyme"
import PaymentPersonalInformation from "./PaymentPersonalInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Payment/PaymentPersonalInformation", () => {
  const props = {
    classes: {
      requiredText: "requiredText",
    },
  }
  const wrapper = shallow(<PaymentPersonalInformation {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(6)
      expect(wrapper.dive().find(TextField)).toHaveLength(3)
    })
  })
})
