import React from "react"
import { shallow } from "enzyme"
import PaymentContactInformation from "./PaymentContactInformation"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"

describe("OrderForm/Payment/ContactInformation", () => {
  const wrapper = shallow(<PaymentContactInformation />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(TextField)).toHaveLength(1)
    })
  })
})
