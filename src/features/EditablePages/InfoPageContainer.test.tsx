import React from "react"
import { mount } from "enzyme"
import wait from "waait"
import InfoPageContainer from "./InfoPageContainer"
import { Helmet } from "react-helmet"
import Loader from "common/components/Loader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import InfoPageView from "./InfoPageView"
import { GET_CONTENT_BY_SLUG } from "common/graphql/queries"
import { MockAuthProvider } from "common/utils/testing"

window.getSelection = jest.fn()
const mockName = "payment"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")

  return {
    ...originalModule,
    useParams: () => ({
      name: mockName,
    }),
  }
})

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
              name: mockName,
              slug: "dsc-payment",
              updated_at: "2020-01-01T17:50:12.427Z",
              updated_by: {
                id: "1",
                email: "rusty@holzer.com",
                first_name: "Rusty",
                last_name: "Holzer",
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
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(0)
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
              locations: undefined,
              nodes: undefined,
              source: undefined,
              positions: undefined,
              originalError: undefined,
              name: "",
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
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
