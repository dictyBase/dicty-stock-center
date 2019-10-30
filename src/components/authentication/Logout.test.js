import React from "react"
import { shallow } from "enzyme"
import { Logout } from "./Logout"
import { Redirect } from "react-router-dom"

describe("authentication/Logout", () => {
  const wrapper = shallow(<Logout logoutUser={jest.fn()} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Redirect)).toHaveLength(1)
    })
  })
})
