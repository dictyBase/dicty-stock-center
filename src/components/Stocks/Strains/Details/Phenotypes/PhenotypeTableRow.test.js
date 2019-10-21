import React from "react"
import { shallow } from "enzyme"
import PhenotypeTableRow from "./PhenotypeTableRow"
import { item } from "./mockPhenotypeData"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"

describe("Strains/Details/Phenotypes/PhenotypeTableRow", () => {
  const props = {
    item,
  }
  const wrapper = shallow(<PhenotypeTableRow {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(TableRow)).toHaveLength(1)
      expect(wrapper.find(TableCell)).toHaveLength(5)
      expect(wrapper.find(PhenotypePublicationDisplay)).toHaveLength(1)
    })
  })
})
