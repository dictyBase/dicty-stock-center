import React from "react"
import { shallow } from "enzyme"
import AdditionalInformation from "./AdditionalInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Shipping/AdditionalInformation", () => {
  const props = {
    classes: {
      innerForm: "innerForm",
    },
  }
  const wrapper = shallow(<AdditionalInformation {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(3)
      expect(wrapper.dive().find(TextField)).toHaveLength(1)
    })
  })
})
