import React from "react"
import { shallow } from "enzyme"
import UnavailableButton from "./UnavailableButton"
import Button from "@material-ui/core/Button"
import TableCell from "@material-ui/core/TableCell"

describe("Stocks/CatalogTableItems/UnavailableButton", () => {
  const props = {
    classes: {
      flexContainer: "",
      tableCell: "",
    },
    rowHeight: "64",
  }
  const wrapper = shallow(<UnavailableButton {...props} />).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find(TableCell)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(1)
    })
    it("renders correct button text", () => {
      const target = <Button>Not available</Button>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })
  })
})
