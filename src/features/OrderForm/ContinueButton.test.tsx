import React from "react"
import { shallow } from "enzyme"
import ContinueButton from "./ContinueButton"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/ContinueButton", () => {
  describe("initial render", () => {
    const wrapper = shallow(<ContinueButton />)
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
