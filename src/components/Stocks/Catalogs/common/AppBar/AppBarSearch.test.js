import React from "react"
import { mount } from "enzyme"
import AppBarSearch from "./AppBarSearch"
import AppBarDropdown from "./AppBarDropdown"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppBarProvider } from "./AppBarContext"
import InputBase from "@material-ui/core/InputBase"
import sinon from "sinon"

describe("Stocks/Strains/Catalog/AppBarSearch", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
      query: "test query",
      catalogDispatch: jest.fn(),
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarSearch {...props} />
      </AppBarProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(AppBarDropdown)).toHaveLength(1)
    })
  })

  describe("clicking buttons", () => {
    const catalogDispatchSpy = sinon.spy()
    const props = {
      dropdownItems: [],
      query: "test query",
      catalogDispatch: catalogDispatchSpy,
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarSearch {...props} />
      </AppBarProvider>,
    )
    it("should use dispatch when clear button is clicked", () => {
      catalogDispatchSpy.resetHistory()
      const clearBtn = wrapper.find(IconButton).at(1)
      clearBtn.simulate("click")
      expect(catalogDispatchSpy.calledTwice).toBe(true)
    })
  })

  describe("form submit", () => {
    const catalogDispatchSpy = sinon.spy()
    const props = {
      dropdownItems: [],
      query: "test query",
      catalogDispatch: catalogDispatchSpy,
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarSearch {...props} />
      </AppBarProvider>,
    )
    it("should use dispatch when form is submitted", () => {
      catalogDispatchSpy.resetHistory()
      const form = wrapper.find("form")
      form.simulate("submit", {
        preventDefault: jest.fn(),
      })
      expect(catalogDispatchSpy.calledTwice).toBe(true)
    })
  })
})
