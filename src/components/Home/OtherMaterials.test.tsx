import React from "react"
import { mount } from "enzyme"
import wait from "waait"
import OtherMaterials from "./OtherMaterials"
import InlineEditor from "components/EditablePages/InlineEditor"
import PanelLoader from "./PanelLoader"
import { GET_CONTENT_BY_SLUG } from "graphql/queries"
import { MockAuthProvider } from "utils/testing"

describe("Home/OtherMaterials", () => {
  beforeEach(() => {
    // @ts-ignore
    window.getSelection = () => ({
      removeAllRanges: () => {},
    })
  })
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_CONTENT_BY_SLUG,
          variables: {
            slug: "dsc-other-materials",
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
              name: "other-materials",
              slug: "dsc-other-materials",
              updated_by: {
                id: "1",
                email: "rusty@holzer.com",
                first_name: "Rusty",
                last_name: "Holzer",
                updated_at: "2020",
                roles: {
                  role: "superuser",
                  permissions: {
                    permission: "admin",
                    resource: "dictybase",
                  },
                },
              },
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <OtherMaterials />
      </MockAuthProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(PanelLoader)).toExist()
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(InlineEditor)).toHaveLength(1)
    })
  })

  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_CONTENT_BY_SLUG,
          variables: {
            slug: "dsc-other-materials",
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
        <OtherMaterials />
      </MockAuthProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find("div").text()).toBe(
        "Error fetching other materials information",
      )
    })
  })
})
