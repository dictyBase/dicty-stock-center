import React from "react"
import { render, screen } from "@testing-library/react"
import PublicationsDisplay, {
  listAuthors,
  getYearFromTimestamp,
  getPubLink,
  getJournalInfo,
} from "./PublicationDisplay"

describe("common/components/PublicationDisplay", () => {
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
        doi: "10.1128/ec.00242-09",
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

    it("includes link to publication page", () => {
      render(<PublicationsDisplay {...props} />)
      const link = screen.getByRole("link")
      expect(link).toHaveAttribute("href", "/publication/20008082")
    })
    it("should match expected reference format", () => {
      render(<PublicationsDisplay {...props} />)
      const pubDisplay = screen.getByTestId("publication-display")
      expect(pubDisplay).toHaveTextContent(
        "Franklin, Hyatt, Chowdhury & Steimle (2009) 'WD repeat domain of Dictyostelium myosin heavy chain kinase C functions in both substrate targeting and cellular localization.' Eukaryotic cell 9:344-349",
      )
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

describe("getPubLink", () => {
  it("should return doi link", () => {
    expect(getPubLink("", "10.1074/jbc.m008319200")).toEqual(
      "https://doi.org/10.1074/jbc.m008319200",
    )
    expect(getPubLink("", "https://doi.org/10.1074/jbc.m008319200")).toEqual(
      "https://doi.org/10.1074/jbc.m008319200",
    )
    expect(getPubLink("11084033", "10.1074/jbc.m008319200")).toEqual(
      "/publication/11084033",
    )
  })
})

describe("getJournalInfo", () => {
  it("should return empty string", () => {
    expect(getJournalInfo("", "")).toBeFalsy()
  })
  it("should return volume and pages", () => {
    expect(getJournalInfo("276", "5235-5239")).toEqual("276:5235-5239")
  })
})
