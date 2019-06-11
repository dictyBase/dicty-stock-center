import React from "react"
import { shallow } from "enzyme"
import OrderConfirmation from "./OrderConfirmation"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/OrderConfirmation", () => {
  const props = {
    classes: {
      alertBox: "alertBox",
      btn: "btn",
    },
  }
  const wrapper = shallow(<OrderConfirmation {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.dive().find(Grid)).toHaveLength(5)
      expect(wrapper.dive().find(Button)).toHaveLength(1)
      expect(wrapper.dive().find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
})
