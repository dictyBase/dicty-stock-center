import React from "react"
import { render, screen } from "@testing-library/react"
import OtherMaterials from "./OtherMaterials"
import { GET_CONTENT_BY_SLUG } from "common/graphql/queries/content"
import { MockAuthProvider } from "common/utils/testing"

window.getSelection = jest.fn()

const mockContent = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "paragraph",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Test Content",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
}

describe("features/Home/OtherMaterials", () => {
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
              content: JSON.stringify(mockContent),
              name: "other-materials",
              slug: "dsc-other-materials",
              updated_at: "2020",
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
    it("displays fetched data", async () => {
      render(
        <MockAuthProvider mocks={mocks}>
          <OtherMaterials />
        </MockAuthProvider>,
      )
      // displays loading skeleton first
      expect(screen.getByTestId("panel-loader")).toBeInTheDocument()
      // wait for data to load...
      const content = await screen.findByText(/Test Content/)
      expect(content).toBeInTheDocument()
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
    it("handles errors as expected", async () => {
      render(
        <MockAuthProvider mocks={mocks}>
          <OtherMaterials />
        </MockAuthProvider>,
      )
      // displays loading skeleton first
      expect(screen.getByTestId("panel-loader")).toBeInTheDocument()
      // wait for error message to load...
      const errorMsg = await screen.findByText(
        /Error fetching other materials information/,
      )
      expect(errorMsg).toBeInTheDocument()
    })
  })
})
