import {
  listAuthors,
  getYearFromTimestamp,
} from "./PhenotypePublicationDisplay"

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
