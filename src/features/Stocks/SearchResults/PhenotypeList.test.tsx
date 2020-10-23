import React from "react"
import { shallow } from "enzyme"
import PhenotypeList from "./PhenotypeList"
import List from "@material-ui/core/List"

describe("Stocks/SearchResults/PhenotypeList", () => {
  const props = {
    data: [],
  }
  const wrapper = shallow(<PhenotypeList {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
    })
  })
})
