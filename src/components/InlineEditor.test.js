import React from "react"
import { shallow } from "enzyme"
import { InlineEditor } from "./InlineEditor"
import Authorization from "components/authentication/Authorization"
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

    it("always renders an Editor", () => {
      expect(inlineEditor().find(Editor).length).toBe(1)
    })
    it("renders the Authorization component", () => {
      expect(inlineEditor().find(Authorization).length).toBe(1)
    })
  })

  describe("button click events", () => {
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
        saveInlineEditing: () => {},
      }
    })
  })

  describe("InlineEditor methods", () => {
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
        saveInlineEditing: () => {},
        editInline: () => {},
        fetchInfoPage: () => {},
      }
    })

    const preventDefault = jest.fn()

    it("should be read only after using onSave", () => {
      const instance = inlineEditor().instance()
      instance.onSave(true)
      expect(inlineEditor().state("readOnly")).toEqual(true)
    })

    it("should be read only after using onCancel", () => {
      const instance = inlineEditor().instance()
      instance.onCancel(true)
      expect(inlineEditor().state("readOnly")).toEqual(true)
    })

    it("should not be read only after using onEdit", () => {
      const instance = inlineEditor().instance()
      instance.onEdit({ preventDefault })
      expect(inlineEditor().state("readOnly")).toEqual(false)
    })
  })
})
