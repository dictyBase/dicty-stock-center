import React from "react"
import { shallow } from "enzyme"
import GeneralTableCell from "./GeneralTableCell"
import CellMeasurer from "react-virtualized/dist/commonjs/CellMeasurer"
import TableCell from "@material-ui/core/TableCell"

describe("Stocks/CatalogTableItems/GeneralTableCell", () => {
  const props = {
    classes: {
      flexContainer: "",
      tableCell: "",
    },
    rowHeight: "64",
    rowIndex: 0,
    cellData: "Test Data",
  }
  const wrapper = shallow(<GeneralTableCell {...props} />).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders expected initial components", () => {
      expect(wrapper.find(CellMeasurer)).toHaveLength(1)
      expect(wrapper.find(TableCell)).toHaveLength(1)
    })
    it("renders correct cell data", () => {
      const target = <TableCell>Test Data</TableCell>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })
  })
})
