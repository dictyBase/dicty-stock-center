import React from "react"
import { shallow } from "enzyme"
import StrainDetailsList from "./StrainDetailsList"
import ItemDisplay from "components/Stocks/DetailsPageItems/ItemDisplay"
import LeftDisplay from "components/Stocks/DetailsPageItems/LeftDisplay"
import RightDisplay from "components/Stocks/DetailsPageItems/RightDisplay"
import { data } from "./mockStrainData"

describe("Stocks/Strains/StrainDetailsList", () => {
  const wrapper = shallow(<StrainDetailsList data={data} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ItemDisplay)).toHaveLength(8)
      expect(wrapper.find(LeftDisplay)).toHaveLength(16)
      expect(wrapper.find(RightDisplay)).toHaveLength(16)
    })
  })
})
