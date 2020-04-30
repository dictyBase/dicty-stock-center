import React from "react"
import { mount } from "enzyme"
import PhenotypeList from "./PhenotypeList"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import { data } from "./mockPhenotypeData"

describe("Stocks/Details/Strains/Phenotypes/PhenotypeList", () => {
  const wrapper = mount(<PhenotypeList phenotypes={data} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PhenotypeListListHeader)).toHaveLength(1)
      expect(wrapper.find(PhenotypeListItem).exists()).toBe(true)
    })
  })
})
