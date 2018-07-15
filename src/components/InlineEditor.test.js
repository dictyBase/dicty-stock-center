import React from "react"
import { shallow, mount, render } from "enzyme"
import sinon from "sinon"
import "../setupTests"
import { InlineEditor } from "./InlineEditor"
import Authorization from "components/authentication/Authorization"
import {
  EditPanel,
  DefaultBlockButton,
  SuccessBlockButton,
  ToolbarNav,
} from "styles"
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

    it("renders ToolbarNav if editor isn't read only", () => {
      inlineEditor().setState({
        readOnly: false,
      })
      expect(inlineEditor().find(ToolbarNav).length).toBe(1)
    })

    it("does not render ToolbarNav if editor is read only", () => {
      inlineEditor().setState({
        readOnly: true,
      })
      expect(inlineEditor().find(ToolbarNav).length).toBe(0)
    })

    it("renders DefaultBlockButton if editor isn't read only", () => {
      inlineEditor().setState({
        readOnly: false,
      })
      expect(inlineEditor().find(DefaultBlockButton).length).toBe(1)
    })

    it("does not render DefaultBlockButton if editor is read only", () => {
      inlineEditor().setState({
        readOnly: true,
      })
      expect(inlineEditor().find(DefaultBlockButton).length).toBe(0)
    })

    it("renders SuccessBlockButton if editor isn't read only", () => {
      inlineEditor().setState({
        readOnly: false,
      })
      expect(inlineEditor().find(SuccessBlockButton).length).toBe(1)
    })

    it("does not render SuccessBlockButton if editor is read only", () => {
      inlineEditor().setState({
        readOnly: true,
      })
      expect(inlineEditor().find(SuccessBlockButton).length).toBe(0)
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

    it("SuccessBlockButton click should only be registered once", () => {
      const mockCallBack = jest.fn()

      const button = shallow(
        <SuccessBlockButton onClick={mockCallBack}>Save</SuccessBlockButton>,
      )
      button.find("button").simulate("click")
      expect(mockCallBack.mock.calls.length).toEqual(1)
    })

    it("should set state on SuccessBlockButton click", () => {
      const mockCallBack = jest.fn()

      const button = shallow(
        <SuccessBlockButton onClick={mockCallBack}>Save</SuccessBlockButton>,
      )
      button.find("button").simulate("click")
      expect(inlineEditor().state("readOnly")).toEqual(true)
    })

    it("DefaultBlockButton click should only be registered once", () => {
      const mockCallBack = jest.fn()

      const button = shallow(
        <DefaultBlockButton onClick={mockCallBack}>Cancel</DefaultBlockButton>,
      )
      button.find("button").simulate("click")
      expect(mockCallBack.mock.calls.length).toEqual(1)
    })

    it("should set state on DefaultBlockButton click", () => {
      const mockCallBack = jest.fn()

      const button = shallow(
        <DefaultBlockButton onClick={mockCallBack}>Cancel</DefaultBlockButton>,
      )
      button.find("button").simulate("click")
      expect(inlineEditor().state("readOnly")).toEqual(true)
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
