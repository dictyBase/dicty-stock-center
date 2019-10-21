import React from "react"
import { shallow } from "enzyme"
import PaymentAddressInformation from "./PaymentAddressInformation"
import Grid from "@material-ui/core/Grid"
import Select from "@material-ui/core/Select"
import TextField from "../TextField"

describe("OrderForm/Shipping/PaymentAddressInformation", () => {
  const props = {
    values: {
      country: "Iceland",
    },
  }
  const wrapper = shallow(<PaymentAddressInformation {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(12)
      expect(wrapper.find(TextField)).toHaveLength(5)
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
