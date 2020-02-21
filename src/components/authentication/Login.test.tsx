import React from "react"
import { shallow } from "enzyme"
import Login, { createOauthURL, openOauthWindow } from "./Login"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import Grid from "@material-ui/core/Grid"

describe("authentication/Login", () => {
  const globalAny = global as any
  const openMock = jest.fn()
  globalAny.open = openMock
  const wrapper = shallow(<Login />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(LoginContainer)).toHaveLength(1)
      expect(wrapper.find(OauthSignHandler)).toHaveLength(1)
    })
  })
  describe("createOauthURL function", () => {
    it("should return expected URL for full config object", () => {
      const fullConfig = {
        name: "Review",
        url: "/forrest/macneil",
        authorizationEndpoint: "https://testendpoint.com/auth",
        clientId: "testID",
        redirectUrl: "https://localhost:3000/review/callback",
        requiredUrlParams: [["response_type", "code"]],
        scopes: ["email"],
        scopeDelimiter: " ",
        optionalUrlParams: [["state", "review"]],
        popupOptions: { width: 1020, height: 633 },
      }
      expect(createOauthURL(fullConfig)).toBe(
        "https://testendpoint.com/auth?client_id=testID&scope=email&response_type=code&state=review&redirect_uri=https://localhost:3000/review/callback",
      )
    })
    it("should return expected URL without URL params", () => {
      const configNoParams = {
        name: "Review",
        url: "/forrest/macneil",
        authorizationEndpoint: "https://testendpoint.com/auth",
        clientId: "testID",
        redirectUrl: "https://localhost:3000/review/callback",
        scopes: ["email"],
        scopeDelimiter: " ",
        popupOptions: { width: 1020, height: 633 },
      }
      expect(createOauthURL(configNoParams)).toBe(
        "https://testendpoint.com/auth?client_id=testID&scope=email&redirect_uri=https://localhost:3000/review/callback",
      )
    })
  })
  describe("openOauthWindow function", () => {
    openOauthWindow("google")
    expect(openMock).toHaveBeenCalled()
  })
})
