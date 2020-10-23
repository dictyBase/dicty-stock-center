import React from "react"
import { mount } from "enzyme"
import PhenotypeListItem from "./PhenotypeListItem"
import { BrowserRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"

describe("Stocks/SearchResults/PhenotypeListItem", () => {
  describe("initial render", () => {
    const props = {
      strain: {
        genes: ["abcd"],
        id: "DBS123456",
        label: "counting strain",
        publications: [
          {
            id: "20008082",
            pub_date: "2009-12-11T00:00:00.000Z",
            title:
              "WD repeat domain of Dictyostelium myosin heavy chain kinase C functions in both substrate targeting and cellular localization.",
            journal: "Eukaryotic cell",
            volume: "9",
            pages: "344-349",
            authors: [
              {
                last_name: "Franklin",
              },
              {
                last_name: "Hyatt",
              },
              {
                last_name: "Chowdhury",
              },
              {
                last_name: "Steimle",
              },
            ],
          },
        ],
      },
    }
    const wrapper = mount(
      <BrowserRouter>
        <PhenotypeListItem {...props} />
      </BrowserRouter>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBeTruthy()
      expect(wrapper.find(Typography).exists()).toBeTruthy()
      expect(wrapper.find(GenesDisplay)).toHaveLength(1)
      expect(wrapper.find(PhenotypePublicationDisplay)).toHaveLength(1)
    })
    it("displays correct label", () => {
      expect(wrapper.text()).toContain("counting strain")
    })
  })
  describe("render without publications", () => {
    const props = {
      strain: {
        genes: ["abcd"],
        id: "DBS123456",
        label: "counting strain",
        publications: [],
      },
    }
    const wrapper = mount(
      <BrowserRouter>
        <PhenotypeListItem {...props} />
      </BrowserRouter>,
    )
    it("should not include publications when not passed as prop", () => {
      expect(wrapper.find(PhenotypePublicationDisplay).exists()).toBeFalsy()
    })
  })
})
