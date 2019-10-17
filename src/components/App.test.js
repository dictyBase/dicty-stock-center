import React from "react"
import { shallow } from "enzyme"
import { App } from "./App"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import Cart from "./Cart"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"

describe("layout/App", () => {
  const props = {
    auth: {
      isAuthenticated: false,
    },
    navbar: {},
    footer: {},
    fetchNavbarAndFooter: jest.fn(),
    classes: {},
  }
  const wrapper = shallow(<App {...props} />)
  describe("initial render without authentication", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find("div")).toHaveLength(1)
      expect(wrapper.find(Header)).toHaveLength(1)
      expect(wrapper.find(Footer)).toHaveLength(1)
      expect(wrapper.find(Navbar)).toHaveLength(1)
      expect(wrapper.find(Cart)).toHaveLength(1)
      expect(wrapper.find(ErrorBoundary)).toHaveLength(1)
      expect(wrapper.find(RenderRoutes)).toHaveLength(1)
    })
  })
})
