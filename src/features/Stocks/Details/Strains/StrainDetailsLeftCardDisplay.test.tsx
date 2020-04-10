import React from "react"
import { shallow } from "enzyme"
import StrainDetailsLeftCardDisplay from "./StrainDetailsLeftCardDisplay"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import StrainDetailsLeftCardHeader from "features/Stocks/Details/Strains/StrainDetailsLeftCardHeader"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import PhenotypeList from "./Phenotypes/PhenotypeList"
import TabPanel from "common/components/TabPanel"

describe("Stock/Details/Strains/StrainDetailsLeftCardDisplay", () => {
  const props = {
    species: "Dictyostelium discoideum",
    rows: [
      {
        id: 0,
        title: "Descriptor",
        content: "Test descriptor",
      },
    ],
  }
  const wrapper = shallow(<StrainDetailsLeftCardDisplay {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Card)).toHaveLength(1)
      expect(wrapper.find(List)).toHaveLength(1)
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(StrainDetailsLeftCardHeader)).toHaveLength(1)
      expect(wrapper.find(TabPanel)).toHaveLength(2)
      expect(wrapper.find(PhenotypeList)).toHaveLength(1)
      expect(wrapper.find(DetailsListItem)).toHaveLength(1)
    })
  })
})
