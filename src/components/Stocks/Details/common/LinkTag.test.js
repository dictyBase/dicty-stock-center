import React from "react"
import { shallow } from "enzyme"
import Button from "@material-ui/core/Button"
import LinkTag from "./LinkTag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Details/common/LinkTag", () => {
  const props = {
    item: "sadA",
    route: "gene",
  }
  const wrapper = shallow(<LinkTag {...props} />)
  it("always renders expected components", () => {
    expect(wrapper.find(Button)).toHaveLength(1)
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
  })
})
