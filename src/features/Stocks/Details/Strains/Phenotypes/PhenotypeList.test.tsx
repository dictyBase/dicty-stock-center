import React from "react"
import { shallow } from "enzyme"
import PhenotypeList from "./PhenotypeList"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import { data } from "./mockPhenotypeData"

describe("Stocks/Details/Strains/Phenotypes/PhenotypeList", () => {
  const wrapper = shallow(<PhenotypeList phenotypes={data} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PhenotypeListListHeader)).toHaveLength(1)
      expect(wrapper.find(PhenotypeListItem).exists()).toBe(true)
    })
  })
})
