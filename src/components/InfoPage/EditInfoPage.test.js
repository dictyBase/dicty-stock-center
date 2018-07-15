import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { EditInfoPage } from "./EditInfoPage"
import { Container, SuccessBlockButton, CancelButton } from "styles"
import { Editor, EditorState } from "draft-js"

describe("InfoPage/EditInfoPage", () => {
  let props
  let mountedEditInfoPage
  const editInfoPage = () => {
    if (!mountedEditInfoPage) {
      mountedEditInfoPage = mount(<EditInfoPage {...props} />)
    }
    return mountedEditInfoPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      cancelEditing: undefined,
      id: undefined,
      updated_by: undefined,
      saveEditing: undefined,
      content: undefined,
    }
    mountedEditInfoPage = undefined
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
        content: content,
        match: {
          params: {
            name: "order",
          },
        },
      }
    })

    it("always renders a Container", () => {
      expect(editInfoPage().find(Container).length).toBe(1)
    })
    it("always renders an Editor", () => {
      expect(editInfoPage().find(Editor).length).toBe(1)
    })
    it("always renders a CancelButton", () => {
      expect(editInfoPage().find(CancelButton).length).toBe(1)
    })
    it("always renders a SuccessBlockButton", () => {
      expect(editInfoPage().find(SuccessBlockButton).length).toBe(1)
    })
  })

  describe("EditInfoPage methods", () => {
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
        content: content,
        match: {
          params: {
            name: "order",
          },
        },
        saveEditing: () => {},
        cancelEditing: () => {},
      }
    })

    const preventDefault = jest.fn()

    it("should be read only after using onSave", () => {
      const instance = editInfoPage().instance()
      const spy = jest.spyOn(instance, "onSave")
      instance.onSave()

      expect(spy).toHaveBeenCalled()
    })

    it("should be read only after using onCancel", () => {
      const instance = editInfoPage().instance()
      const spy = jest.spyOn(instance, "onCancel")
      instance.onCancel()

      expect(spy).toHaveBeenCalled()
    })
  })
})
