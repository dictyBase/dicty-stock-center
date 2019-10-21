import React from "react"
import { shallow } from "enzyme"
import PhenotypeTable from "./PhenotypeTable"
import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypeTableRow from "./PhenotypeTableRow"
import { data } from "./mockPhenotypeData"
import Table from "@material-ui/core/Table"

describe("Strains/Details/Phenotypes/PhenotypeTable", () => {
  const props = {
    data: data,
  }
  const wrapper = shallow(<PhenotypeTable {...props} />)
  describe("initial render", () => {
    it("always renders one Table", () => {
      expect(wrapper.find(Table)).toHaveLength(1)
    })
    it("renders three TableRow components based on given props", () => {
      expect(wrapper.find(PhenotypeTableRow)).toHaveLength(3)
    })
    it("always renders one PhenotypeTableHeader", () => {
      expect(wrapper.find(PhenotypeTableHeader)).toHaveLength(1)
    })
  })
})
