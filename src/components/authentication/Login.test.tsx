import React from "react"
import { shallow } from "enzyme"
import Login from "./Login"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import ErrorNotification from "components/authentication/ErrorNotification"

describe("authentication/Login", () => {
  describe("initial render", () => {
    it("always renders initial components", () => {
      const props = {
        location: {
          state: {},
        },
      }
      const wrapper = shallow(<Login {...props} />)
      expect(wrapper.find(LoginContainer)).toHaveLength(1)
      expect(wrapper.find(OauthSignHandler)).toHaveLength(1)
    })
  })
  describe("error displays", () => {
    it("displays ErrorNotification if error", () => {
      const props = {
        location: {
          state: {
            error: "could not log in",
          },
        },
      }
      const wrapper = shallow(<Login {...props} />)
      expect(wrapper.find(ErrorNotification)).toHaveLength(1)
    })
  })
})
