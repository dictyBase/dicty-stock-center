import React from "react"
import { mount } from "enzyme"
import EditInfoPage from "./EditInfoPage"
import { PageEditor } from "dicty-components-page-editor"
import { MockAuthProvider } from "common/utils/testing"
import Grid from "@material-ui/core/Grid"

window.getSelection = jest.fn()

describe("EditablePages/EditInfoPage", () => {
  describe("initial render", () => {
    const props = {
      location: {
        hash: "",
        key: "hgjgf",
        pathname: "/information/payment/edit",
        search: "",
        state: {
          data: {
            id: "99",
            name: "payment",
            slug: "dsc-payment",
            updated_at: "2020-01-01T17:50:12.427Z",
            updated_by: {
              id: "999",
              first_name: "Art",
              last_name: "Vandelay",
              roles: [
                {
                  role: "Latex Salesman",
                },
              ],
            },
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
          },
        },
      },
    }
    const wrapper = mount(
      <MockAuthProvider mocks={[]}>
        <EditInfoPage {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(PageEditor)).toHaveLength(1)
    })
  })
})
