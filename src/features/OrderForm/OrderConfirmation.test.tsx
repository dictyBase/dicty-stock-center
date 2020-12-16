import React from "react"
import { shallow } from "enzyme"
import OrderConfirmation from "./OrderConfirmation"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/OrderConfirmation", () => {
  describe("render with location state prop", () => {
    const props = {
      location: {
        pathname: "/order/submitted",
        state: {
          orderID: "123456",
        },
      },
    }
    const wrapper = shallow(<OrderConfirmation {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
    it("includes order ID number in display", () => {
      expect(wrapper.find("p").first().text()).toContain(
        `Order ID: ${props.location.state.orderID}`,
      )
    })
  })
  describe("render with location state undefined", () => {
    const props = {
      location: {
        pathname: "/order/submitted",
        state: undefined,
      },
    }
    const wrapper = shallow(<OrderConfirmation {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(Alert)).toHaveLength(1)
      expect(wrapper.find(AlertTitle)).toHaveLength(1)
    })
    it("includes Unavailable text in display", () => {
      expect(wrapper.find(AlertTitle).first().text()).toContain("Unavailable")
    })
  })
})
