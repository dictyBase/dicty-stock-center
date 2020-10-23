import React from "react"
import { mount } from "enzyme"
import PhenotypePublicationDisplay, {
  listAuthors,
  getYearFromTimestamp,
} from "./PhenotypePublicationDisplay"
import ExternalLinkIcon from "common/components/ExternalLinkIcon"

describe("features/Stocks/SearchResults/PhenotypePublicationDisplay", () => {
  describe("initial render with publication", () => {
    const props = {
      publication: {
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
    }
    const wrapper = mount(<PhenotypePublicationDisplay {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(ExternalLinkIcon)).toHaveLength(1)
    })
    it("should match expected reference format", () => {
      expect(wrapper.text()).toContain(
        "Franklin, Hyatt, Chowdhury & Steimle (2009) 'WD repeat domain of Dictyostelium myosin heavy chain kinase C functions in both substrate targeting and cellular localization.' Eukaryotic cell 9:344-349",
      )
    })
  })

  describe("initial render without publication", () => {
    const wrapper = mount(<PhenotypePublicationDisplay />)
    it("should not display publication link", () => {
      expect(wrapper.find(ExternalLinkIcon).exists()).toBeFalsy()
    })
  })
})

describe("listAuthors", () => {
  const authors = [
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
  ]

  it("should return correct format for long list of authors", () => {
    expect(listAuthors(authors)).toBe("Franklin, Hyatt, Chowdhury & Steimle")
  })
  it("should not have commas for list of two authors", () => {
    expect(listAuthors(authors.slice(0, 2))).toBe("Franklin & Hyatt")
  })
  it("should not have any punctuation for single author", () => {
    expect(listAuthors([authors[0]])).toBe("Franklin")
  })
})

describe("getYearFromTimestamp", () => {
  it("should extract year from timestamp", () => {
    expect(getYearFromTimestamp("2004-06-11T00:00:00.000Z")).toBe(2004)
  })
})
