import React from "react"
import { shallow } from "enzyme"
import "../../../setupTests"
import PhenotypeTable from "./PhenotypeTable"
import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"
import { data } from "./mockPhenotypeData"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

describe("Strains/Phenotypes/PhenotypeTable", () => {
  const props = {
    data: data,
  }
  const wrapper = shallow(<PhenotypeTable {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders one Table", () => {
      expect(wrapper.dive().find(Table)).toHaveLength(1)
    })
    it("renders three TableRow components based on given props", () => {
      expect(wrapper.dive().find(TableRow)).toHaveLength(3)
    })
    it("renders twelve TableCell components based on given props", () => {
      expect(wrapper.dive().find(TableCell)).toHaveLength(12)
    })
    it("always renders one PhenotypeTableHeader", () => {
      expect(wrapper.dive().find(PhenotypeTableHeader)).toHaveLength(1)
    })
    it("renders three PhenotypePublicationDisplay components based on given props", () => {
      expect(wrapper.dive().find(PhenotypePublicationDisplay)).toHaveLength(3)
    })
  })
})
