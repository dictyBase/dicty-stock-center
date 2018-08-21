import React from "react"
import toJson from "enzyme-to-json"
import { shallow } from "enzyme"
import "jest-styled-components"
import { App } from "./App"

test("matching a snapshot of App", () => {
  const props = {
    auth: {
      isAuthenticated: false,
    },
    cart: {},
    footer: {},
    navbar: {},
    fetchNavbarAction: () => {},
    fetchFooterAction: () => {},
  }
  const subject = shallow(<App {...props} />)
  expect(toJson(subject)).toMatchSnapshot()
})
