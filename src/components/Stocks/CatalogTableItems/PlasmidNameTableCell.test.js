import React from "react"
import { shallow } from "enzyme"
import PlasmidNameTableCell from "./PlasmidNameTableCell"
import { Link } from "react-router-dom"
import TableCell from "@material-ui/core/TableCell"

describe("Stocks/CatalogTableItems/PlasmidNameTableCell", () => {
  const props = {
    classes: {
      flexContainer: "",
    },
    rowHeight: "64",
    name: "Test Data",
  }
  const wrapper = shallow(<PlasmidNameTableCell {...props} />).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find(TableCell)).toHaveLength(1)
      expect(wrapper.find(Link)).toHaveLength(1)
    })
    it("renders correct cell data", () => {
      const target = <Link>Test Data</Link>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })
  })
})
