import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { InfoPageView } from "./InfoPageView"

describe("InfoPage/InfoPageView", () => {
  let props
  let mountedInfoPageView
  const infoPage = () => {
    if (!mountedInfoPageView) {
      mountedInfoPageView = mount(<InfoPageView {...props} />)
    }
    return mountedInfoPageView
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      editPage: undefined,
      fetchUserInfo: undefined,
      fetchedUserData: undefined,
      loggedInUser: undefined,
      isAuthenticated: undefined,
    }
    mountedInfoPageView = undefined
  })

  // insert tests here
})
