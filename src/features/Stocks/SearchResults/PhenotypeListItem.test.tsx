import React from "react"
import { mount } from "enzyme"
import PhenotypeListItem from "./PhenotypeListItem"
import { BrowserRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"

describe("Stocks/SearchResults/PhenotypeListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            genes: ["abcd"],
            id: "DBS123456",
            label: "counting strain",
            publications: [
              {
                doi: "10.1128/ec.00242-09",
                id: "20008082",
              },
            ],
          },
        ],
      },
      index: 0,
      style: {},
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
    })
    it("displays correct data", () => {
      expect(wrapper.text()).toContain("counting strain")
      expect(wrapper.text()).toContain("abcd")
      expect(wrapper.text()).toContain("20008082")
    })
  })
})
