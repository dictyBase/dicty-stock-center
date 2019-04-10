import React from "react"
import { shallow } from "enzyme"
import "../../../setupTests"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"

describe("Strains/Phenotypes/PhenotypePublicationDisplay", () => {
  const props = {
    data: {
      pub_date: "2011-03-01T00:00:00.000Z",
      title:
        "A polarized epithelium organized by beta- and alpha-catenin predates cadherin and metazoan origins.",
      journal: "Science (New York, N.Y.)",
      volume: "331",
      pages: "1336-9",
      authors: [
        {
          last_name: "Dickinson",
        },
        {
          last_name: "Nelson",
        },
        {
          last_name: "Weis",
        },
      ],
    },
  }
  const wrapper = shallow(<PhenotypePublicationDisplay {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("matches expected text output", () => {
      expect(wrapper.text()).toEqual(
        "Dickinson, Nelson, Weis (2011) 'A polarized epithelium organized by beta- and alpha-catenin predates cadherin and metazoan origins.' Science (New York, N.Y.) 331:1336-9",
      )
    })
  })
})
