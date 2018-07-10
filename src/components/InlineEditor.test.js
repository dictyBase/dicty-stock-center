import React from "react"
import { shallow, mount, render } from "enzyme"
import sinon from "sinon"
import "../setupTests"
import { InlineEditor } from "./InlineEditor"
import Authorization from "components/authentication/Authorization"
import { EditPanel } from "styles"
import Editor from "draft-js-plugins-editor"

describe("InlineEditor", () => {
  let props
  let mountedInlineEditor
  const inlineEditor = () => {
    if (!mountedInlineEditor) {
      mountedInlineEditor = shallow(<InlineEditor {...props} />)
    }
    return mountedInlineEditor
  }

  beforeEach(() => {
    props = {
      page: undefined,
      id: undefined,
      updated_by: undefined,
      saveInlineEditing: undefined,
      editInline: undefined,
    }
    mountedInlineEditor = undefined
  })

  const content = JSON.stringify({
    entityMap: {},
    blocks: [
      {
        key: "abc",
        text: "123",
        type: "unstyled",
        depth: 0,
      },
    ],
  })

  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
            },
          },
        },
      }
    })

    it("always renders an EditPanel component", () => {
      expect(inlineEditor().find(EditPanel).length).toBe(1)
    })
    it("always renders an Editor", () => {
      expect(inlineEditor().find(Editor).length).toBe(1)
    })
    it("renders the Authorization component", () => {
      expect(inlineEditor().find(Authorization).length).toBe(1)
    })
  })
})
