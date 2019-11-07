import React from "react"
import { shallow } from "enzyme"
import DetailsHeader from "./DetailsHeader"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Details/common/DetailsHeader", () => {
  const props = {
    stockType: "Plasmid",
    name: "myoB-/[act15]:myoB(S332A)",
    id: "DBS0351367",
  }
  const wrapper = shallow(<DetailsHeader {...props} />)
  describe("initial render", () => {
    it("always renders one Typography component", () => {
      expect(wrapper.find(Typography)).toHaveLength(2)
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
