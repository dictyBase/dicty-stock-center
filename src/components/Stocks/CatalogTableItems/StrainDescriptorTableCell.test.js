import React from "react"
import { shallow } from "enzyme"
import StrainDescriptorTableCell from "./StrainDescriptorTableCell"
import { Link } from "react-router-dom"
import TableCell from "@material-ui/core/TableCell"

describe("Stocks/CatalogTableItems/StrainDescriptorTableCell", () => {
  const props = {
    classes: {
      flexContainer: "",
      tableCell: "",
    },
    rowHeight: "64",
    id: "DBS123456",
    descriptor: "Test Data",
  }
  const wrapper = shallow(<StrainDescriptorTableCell {...props} />).dive()
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
