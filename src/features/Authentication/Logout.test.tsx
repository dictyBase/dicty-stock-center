import React from "react"
import { mount } from "enzyme"
import Logout from "./Logout"
import { Redirect } from "react-router-dom"
import { MockAuthProvider } from "utils/testing"

describe("authentication/Logout", () => {
  describe("initial render", () => {
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <Logout />
      </MockAuthProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Redirect)).toHaveLength(1)
    })
  })
})
