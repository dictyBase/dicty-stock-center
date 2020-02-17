import React from "react"
import { mount } from "enzyme"
import EditInfoPage from "./EditInfoPage"
import { Editor } from "draft-js"
import { MockAuthProvider } from "utils/testing"

describe("InfoPage/EditInfoPage", () => {
  describe("initial render", () => {
    const props = {
      classes: {},
      location: {
        state: {
          data: {
            content: JSON.stringify({
              entityMap: {},
              blocks: [
                {
                  key: "abc",
                  text: "123",
                  type: "unstyled",
                  depth: 0,
                },
              ],
            }),
          },
        },
      },
    }
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <EditInfoPage {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Editor)).toHaveLength(1)
    })
  })
})
