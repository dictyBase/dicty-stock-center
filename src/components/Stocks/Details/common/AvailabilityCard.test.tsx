import React from "react"
import { shallow } from "enzyme"
import AvailabilityCard from "./AvailabilityCard"
import AvailableCardDisplay from "./AvailableCardDisplay"
import UnavailableCardDisplay from "./UnavailableCardDisplay"

describe("Stocks/Details/common/AvailabilityCard", () => {
  describe("stock is available", () => {
    const props = {
      data: {
        id: "DBS1323456",
        label: "test strain",
        summary: "this is a test summary",
        in_stock: true,
      },
      stockType: "strain",
    }
    const wrapper = shallow(<AvailabilityCard {...props} />)
    it("renders AvailableCardDisplay if in stock", () => {
      expect(wrapper.find(AvailableCardDisplay)).toHaveLength(1)
      expect(wrapper.find(UnavailableCardDisplay)).toHaveLength(0)
    })
  })
  describe("stock is unavailable", () => {
    const props = {
      data: {
        id: "DBS1323456",
        label: "test strain",
        summary: "this is a test summary",
        in_stock: false,
      },
      stockType: "strain",
    }
    const wrapper = shallow(<AvailabilityCard {...props} />)
    it("renders UnavailableCardDisplay if not in stock", () => {
      expect(wrapper.find(UnavailableCardDisplay)).toHaveLength(1)
      expect(wrapper.find(AvailableCardDisplay)).toHaveLength(0)
    })
  })
})
