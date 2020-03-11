import React from "react"
import { mount } from "enzyme"
import InlineEditor from "./InlineEditor"
import { PageEditor } from "dicty-components-page-editor"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MockAuthProvider } from "utils/testing"

window.getSelection = jest.fn()

describe("EditablePages/InlineEditor", () => {
  describe("initial render with editing permission and valid token", () => {
    const props = {
      data: {
        id: "99",
        name: "payment",
        slug: "dsc-payment",
        updated_by: {
          id: "999",
          first_name: "Art",
          last_name: "Vandelay",
          email: "seven@vandelayindustries.com",
          updated_at: "2020-01-01T17:50:12.427Z",
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
    }
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <InlineEditor {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(PageEditor)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })

  describe("initial render with no special permissions", () => {
    const props = {
      data: {
        id: "99",
        name: "payment",
        slug: "dsc-payment",
        updated_by: {
          id: "999",
          first_name: "Art",
          last_name: "Vandelay",
          email: "seven@vandelayindustries.com",
          updated_at: "2020-01-01T17:50:12.427Z",
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
    }
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks} validToken={false}>
        <InlineEditor {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(PageEditor)).toHaveLength(1)
      expect(wrapper.find(Button)).not.toExist()
      expect(wrapper.find(FontAwesomeIcon)).not.toExist()
    })
  })
})
