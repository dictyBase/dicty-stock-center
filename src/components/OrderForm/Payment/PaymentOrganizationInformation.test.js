import React from "react"
import { shallow } from "enzyme"
import PaymentOrganizationInformation from "./PaymentOrganizationInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Payment/PaymentOrganizationInformation", () => {
  const wrapper = shallow(<PaymentOrganizationInformation />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(TextField)).toHaveLength(2)
    })
  })
})
