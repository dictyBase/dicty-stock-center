import React from "react"
import { shallow } from "enzyme"
import UnavailableCardDisplay from "./UnavailableCardDisplay"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stock/Details/common/UnavailableCardDisplay", () => {
  const wrapper = shallow(<UnavailableCardDisplay />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Typography).exists()).toBe(true)
      expect(wrapper.find(Divider).exists()).toBe(true)
      expect(wrapper.find(FontAwesomeIcon).exists()).toBe(true)
    })
  })
})
