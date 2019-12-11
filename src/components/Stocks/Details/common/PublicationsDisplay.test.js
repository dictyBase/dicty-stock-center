import React from "react"
import { shallow } from "enzyme"
import PublicationsDisplay from "./PublicationsDisplay"
import Skeleton from "react-loading-skeleton"
import * as PublicationHook from "hooks/useDOI"

jest.mock("hooks/useDOI")

describe("Stocks/Details/common/PublicationsDisplay", () => {
  const props = {
    publications: [
      {
        id: "123456",
        doi: "10.1074/test.m892301",
      },
    ],
  }
  it("initially renders loading component", () => {
    const mockedHook = PublicationHook
    mockedHook.default.mockImplementation(() => ({
      loading: true,
      data: [],
      error: null,
    }))
    const wrapper = shallow(<PublicationsDisplay {...props} />)
    expect(wrapper.find(Skeleton)).toHaveLength(1)
  })

  it("displays anchor tag when data is present", () => {
    const mockedHook = PublicationHook
    mockedHook.default.mockImplementation(() => ({
      loading: false,
      data: [
        {
          id: "123456",
          data: "this is test data",
        },
      ],
      error: null,
    }))
    const wrapper = shallow(<PublicationsDisplay {...props} />)

    expect(wrapper.find("a")).toHaveLength(1)
  })

  it("displays error message if error", () => {
    const mockedHook = PublicationHook
    mockedHook.default.mockImplementation(() => ({
      loading: false,
      data: [],
      error: "this is a test error",
    }))
    const wrapper = shallow(<PublicationsDisplay {...props} />)

    expect(wrapper.text()).toContain("Error fetching publication data")
  })
})
