import React from "react"
import { shallow } from "enzyme"
import ResultsHeader from "./ResultsHeader"
import Typography from "@material-ui/core/Typography"

describe("Stocks/SearchResults/ResultsHeader", () => {
  const props = {
    property: "Phenotype",
    description: "abolished protein phosphorylation",
  }
  const wrapper = shallow(<ResultsHeader {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Typography)).toHaveLength(1)
    })
    it("displays expected header text", () => {
      expect(wrapper.text()).toEqual(
        "Phenotype Search Results for abolished protein phosphorylation",
      )
    })
  })
})
