import React from "react"
import { shallow } from "enzyme"
import PaymentInfoBox from "./PaymentInfoBox"
import Grid from "@material-ui/core/Grid"

describe("OrderForm/Payment/PaymentInfoBox", () => {
  const props = {
    classes: {
      panelBlue: "panelBlue",
    },
  }
  const wrapper = shallow(<PaymentInfoBox {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(3)
    })
  })
})
