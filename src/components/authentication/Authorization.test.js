import React from "react"
import { shallow } from "enzyme"
import "../../setupTests"
import { Authorization } from "./Authorization"

describe("authentication/Authorization", () => {
  const props = {
    loggedInUser: {
      verifyPermissions: () => {},
      checkRoles: () => {},
    },
    fetchedUserData: {},
    verifiedToken: {
      verifyToken: () => {},
    },
  }
  const loggedInUser = undefined
  const fetchedUserData = {}
  const verifiedToken = undefined

  const renderMock = jest.fn()
  /*eslint-disable */
  const wrapper = shallow(<Authorization render={renderMock} {...props} />)

  it("should call `render` with classes", () => {
    expect(renderMock).toHaveBeenCalledWith({
      loggedInUser,
      fetchedUserData,
      verifiedToken,
    })
  })
})
