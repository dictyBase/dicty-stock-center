import React from "react"
import { mount } from "enzyme"
import InfoPageView from "./InfoPageView"
import { PageEditor } from "dicty-components-page-editor"
import { MockAuthProvider } from "common/utils/testing"
import Grid from "@material-ui/core/Grid"
import InfoPageViewToolbar from "./InfoPageViewToolbar"

window.getSelection = jest.fn()

describe("EditablePages/InfoPageView", () => {
  describe("initial render", () => {
    const props = {
      data: {
        id: "123",
        slug: "dsc-test",
        name: "test",
        created_by: {
          id: "999",
          first_name: "Art",
          last_name: "Vandelay",
          roles: [
            {
              role: "Latex Salesman",
            },
          ],
        },
        updated_by: {
          id: "999",
          first_name: "Art",
          last_name: "Vandelay",
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
    const wrapper = mount(
      <MockAuthProvider mocks={[]}>
        <InfoPageView {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(InfoPageViewToolbar)).toHaveLength(1)
      expect(wrapper.find(PageEditor)).toHaveLength(1)
    })
  })
})
