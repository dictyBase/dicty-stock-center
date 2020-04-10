import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { BrowserRouter } from "react-router-dom"
import wait from "waait"
import Availability from "./Availability"
import PanelLoader from "./PanelLoader"
import { GET_STOCK_TOTALS } from "common/graphql/queries"

describe("Home/Availability", () => {
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
          <Availability />
        </BrowserRouter>
      </MockedProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(PanelLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find("h5").at(0).text()).toBe("26000 Strains")
      expect(wrapper.find("h5").at(1).text()).toBe("900 Plasmids")
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
          <Availability />
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
