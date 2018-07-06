import React from "react"
import { shallow } from "enzyme"
import "../../setupTests"
import StockDetailRow from "./StockDetailRow"
import { Box } from "rebass"

describe("strains/StockDetailRow", () => {
  const props = {
    right: { "Strain ID": "DBS03350146" },
    left: { "Strain Descriptor": "No Information" },
  }
  const wrapper = shallow(<StockDetailRow {...props} />)
  it("should have four items", () => {
    expect(wrapper.find(Box)).toHaveLength(4)
  })
})
