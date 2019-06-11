import React from "react"
import { shallow } from "enzyme"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Payment/PaymentOrganizationInformation", () => {
  const props = {
    classes: {
      requiredText: "requiredText",
    },
  }
  const wrapper = shallow(<PaymentOrganizationInformation {...props} />)
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
