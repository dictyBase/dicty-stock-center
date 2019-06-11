import React from "react"
import { shallow } from "enzyme"
import OrganizationInformation from "./OrganizationInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Shipping/OrganizationInformation", () => {
  const props = {
    classes: {
      requiredText: "requiredText",
    },
  }
  const wrapper = shallow(<OrganizationInformation {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(4)
      expect(wrapper.dive().find(TextField)).toHaveLength(2)
    })
  })
})
