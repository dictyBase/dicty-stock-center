import React from "react"
import { mount } from "enzyme"
import Logout from "./Logout"
import { Redirect } from "react-router-dom"
import { MockAuthProvider } from "common/utils/testing"
import { LOGOUT } from "common/graphql/mutations"

describe("authentication/Logout", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: LOGOUT,
        },
        result: {
          data: {
            logout: {
              success: true,
            },
          },
        },
      },
    ]
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
