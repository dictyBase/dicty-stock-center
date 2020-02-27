import React from "react"
import { mount } from "enzyme"
import InfoPageView from "./InfoPageView"
import { Editor } from "draft-js"
import { MockAuthProvider } from "utils/testing"

describe("InfoPage/InfoPageView", () => {
  describe("initial render", () => {
    const props = {
      data: {
        updated_by: {
          first_name: "Art",
          last_name: "Vandelay",
          roles: [
            {
              role: "Latex Salesman",
            },
          ],
        },
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
        <InfoPageView {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Editor)).toHaveLength(1)
    })
  })
})
