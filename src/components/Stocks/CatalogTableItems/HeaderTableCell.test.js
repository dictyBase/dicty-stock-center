import React from "react"
import { shallow } from "enzyme"
import HeaderTableCell from "./HeaderTableCell"
import TableCell from "@material-ui/core/TableCell"

describe("Stocks/CatalogTableItems/HeaderTableCell", () => {
  const props = {
    classes: {
      flexContainer: "",
    },
    headerHeight: "64",
    label: "Test Data",
  }
  const wrapper = shallow(<HeaderTableCell {...props} />).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find(TableCell)).toHaveLength(1)
    })
    it("renders correct cell data", () => {
      const target = <strong>Test Data</strong>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })
  })
})
