import React from "react"
import { shallow } from "enzyme"
import CartCapacityFullMessage from "./CartCapacityFullMessage"

describe("Stocks/Details/common/CartCapacityFullMessage", () => {
  const wrapper = shallow(<CartCapacityFullMessage />)
  describe("initial render", () => {
    it("displays capacity full message", () => {
      expect(wrapper.text()).toContain("Cart capacity is full")
    })
  })
})
