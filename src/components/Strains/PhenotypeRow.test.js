import React from "react"
import { shallow } from "enzyme"
import PhenotypeRow from "./PhenotypeRow"
import { BorderBox } from "styles"

describe("strains/PhenotypeRow", () => {
  const props = {
    phenotype: "phenotype",
    notes: "notes",
    reference: "reference"
  }
  const wrapper = shallow(<PhenotypeRow {...props} />)
  it("has 4 cells", () => {
    expect(wrapper.find(BorderBox)).toHaveLength(4)
  })
})
