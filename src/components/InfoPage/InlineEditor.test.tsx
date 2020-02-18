import React from "react"
import { mount } from "enzyme"
import InlineEditor from "./InlineEditor"
import { Editor } from "draft-js"
import { MockAuthProvider } from "utils/testing"

describe("InfoPage/InlineEditor", () => {
  describe("initial render", () => {
    const props = {
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
      classes: {},
    }
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <InlineEditor {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Editor)).toHaveLength(1)
    })
  })
})
