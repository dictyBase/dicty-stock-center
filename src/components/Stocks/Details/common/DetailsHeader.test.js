import React from "react"
import { shallow } from "enzyme"
import DetailsHeader from "./DetailsHeader"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

describe("Stocks/Details/common/DetailsHeader", () => {
  const props = {
    stockType: "Plasmid",
    name: "myoB-/[act15]:myoB(S332A)",
    id: "DBS0351367",
  }
  const wrapper = shallow(<DetailsHeader {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Typography)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(1)
    })
  })
})
