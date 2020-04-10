import React from "react"
import { mount } from "enzyme"
import wait from "waait"
import InfoPageContainer from "./InfoPageContainer"
import { Helmet } from "react-helmet"
import Loader from "common/components/Loader"
import InfoPageView from "./InfoPageView"
import { GET_CONTENT_BY_SLUG } from "common/graphql/queries"
import { MockAuthProvider } from "common/utils/testing"

window.getSelection = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    name: "payment",
  }),
}))

describe("EditablePages/InfoPageContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_CONTENT_BY_SLUG,
          variables: {
            slug: "dsc-payment",
          },
        },
        result: {
          data: {
            contentBySlug: {
              id: "1",
              content: JSON.stringify({
                object: "block",
                type: "paragraph",
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        text: "Test content",
                      },
                    ],
                  },
                ],
              }),
              name: "payment",
              slug: "dsc-payment",
              updated_by: {
                id: "1",
                email: "rusty@holzer.com",
                first_name: "Rusty",
                last_name: "Holzer",
                updated_at: "2020",
                roles: [
                  {
                    role: "superuser",
                    permissions: {
                      permission: "admin",
                      resource: "dictybase",
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <InfoPageContainer />
      </MockAuthProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(Loader)).toExist()
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(InfoPageView)).toHaveLength(1)
    })
  })

  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_CONTENT_BY_SLUG,
          variables: {
            slug: "dsc-payment",
          },
        },
        result: {
          errors: [
            {
              message: "Content not found",
              path: [],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <InfoPageContainer />
      </MockAuthProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find("div").text()).toBe("Error fetching page content")
    })
  })
})
