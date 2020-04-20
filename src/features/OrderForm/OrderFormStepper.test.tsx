import React from "react"
import { shallow } from "enzyme"
import OrderFormStepper from "./OrderFormStepper"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

describe("OrderForm/OrderFormStepper", () => {
  const wrapper = shallow(<OrderFormStepper step={0} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Stepper)).toHaveLength(1)
      expect(wrapper.find(Step)).toHaveLength(3)
      expect(wrapper.find(StepLabel)).toHaveLength(3)
    })
  })
})
