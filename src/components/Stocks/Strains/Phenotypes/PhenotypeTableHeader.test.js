import React from "react"
import { mount } from "enzyme"
import "../../../setupTests"
import PhenotypeTableHeader from "./PhenotypeTableHeader"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

describe("Strains/Phenotypes/PhenotypeTableHeader", () => {
  const wrapper = mount(
    <Table>
      <PhenotypeTableHeader />
    </Table>,
  )
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders one TableHead", () => {
      expect(wrapper.find(TableHead)).toHaveLength(1)
    })
    it("always renders one TableRow", () => {
      expect(wrapper.find(TableRow)).toHaveLength(1)
    })
    it("always renders four TableCell components", () => {
      expect(wrapper.find(TableCell)).toHaveLength(4)
    })
  })
})
