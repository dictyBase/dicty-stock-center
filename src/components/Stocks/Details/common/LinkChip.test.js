import React from "react"
import { shallow } from "enzyme"
import Chip from "@material-ui/core/Chip"
import LinkChip from "./LinkChip"

describe("Stocks/Details/common", () => {
  const props = {
    item: "sadA",
    route: "gene",
  }
  const wrapper = shallow(<LinkChip {...props} />)
  it("always renders one Chip", () => {
    expect(wrapper.find(Chip)).toHaveLength(1)
  })
})
