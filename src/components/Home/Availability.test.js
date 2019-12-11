import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { BrowserRouter } from "react-router-dom"
import wait from "waait"
import { Availability } from "./Availability"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { GET_STOCK_TOTALS } from "queries/queries"

describe("Home/Availability", () => {
  const props = {
    classes: {
      panelGray: "",
    },
  }
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STOCK_TOTALS,
          variables: { cursor: 0 },
        },
        result: {
          data: {
            listPlasmids: {
              totalCount: 900,
            },
            listStrains: {
              totalCount: 26000,
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Availability {...props} />
        </BrowserRouter>
      </MockedProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(SkeletonTheme)).toHaveLength(1)
      expect(wrapper.find(Skeleton)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(
        wrapper
          .find("h5")
          .at(0)
          .text(),
      ).toBe("26000 Strains")
      expect(
        wrapper
          .find("h5")
          .at(1)
          .text(),
      ).toBe("900 Plasmids")
    })
  })
  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_STOCK_TOTALS,
          variables: {
            cursor: 0,
          },
        },
        result: {
          errors: [
            {
              message: "could not get list",
              path: ["stocks"],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Availability {...props} />
        </MockedProvider>
      </BrowserRouter>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find("div").text()).toBe(
        "Error fetching number of strains and plasmids",
      )
    })
  })
})
