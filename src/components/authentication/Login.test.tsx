import React from "react"
import { shallow } from "enzyme"
import Login from "./Login"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import Grid from "@material-ui/core/Grid"

describe("authentication/Login", () => {
  describe("initial render", () => {
    it("always renders initial components", () => {
      const wrapper = shallow(<Login />)
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(LoginContainer)).toHaveLength(1)
      expect(wrapper.find(OauthSignHandler)).toHaveLength(1)
    })
  })
})
