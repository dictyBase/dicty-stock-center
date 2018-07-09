import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { EditInfoPage } from "./EditInfoPage"

describe("InfoPage/EditInfoPage", () => {
  let props
  let mountedEditInfoPage
  const infoPage = () => {
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

  // insert tests here
})
