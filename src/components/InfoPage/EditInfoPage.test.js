import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { EditInfoPage } from "./EditInfoPage"
import { Container } from "styles"
import { EditorState } from "draft-js"

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
    }
    mountedEditInfoPage = undefined
  })

  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
              updated_at: "999",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
      }
    })

    it("always renders a Container", () => {
      expect(editInfoPage().find(Container).length).toBeGreaterThan(0)
    })
    it("always renders an Editor", () => {
      expect(editInfoPage().find(Editor).length).toBeGreaterThan(0)
    })
  })
})
