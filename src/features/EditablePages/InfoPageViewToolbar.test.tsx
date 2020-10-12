import React from "react"
import { mount } from "enzyme"
import InfoPageViewToolbar from "./InfoPageViewToolbar"
import Grid from "@material-ui/core/Grid"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import ErrorNotification from "features/Authentication/ErrorNotification"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MockAuthProvider } from "common/utils/testing"

describe("EditablePages/InfoPageViewToolbar", () => {
  describe("user has editing permission and verified token", () => {
    const props = {
      lastUpdate: "2020-01-01T17:50:12.427Z",
      user: {
        id: "1234",
        first_name: "Art",
        last_name: "Vandelay",
        roles: [
          {
            role: "Latex Salesman",
          },
        ],
      },
      handleClick: jest.fn(),
    }
    const wrapper = mount(
      <MockAuthProvider mocks={[]}>
        <InfoPageViewToolbar {...props} />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(Tooltip)).toHaveLength(1)
    })
    it("calls handleClick when edit icon clicked", () => {
      wrapper.find(IconButton).simulate("click")
      expect(props.handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("user has editing permission and expired token", () => {
    const props = {
      lastUpdate: "2020-01-01T17:50:12.427Z",
      user: {
        id: "1234",
        first_name: "Art",
        last_name: "Vandelay",
        roles: [
          {
            role: "Latex Salesman",
          },
        ],
      },
      handleClick: jest.fn(),
    }
    const wrapper = mount(
      <MockAuthProvider mocks={[]} validToken={false}>
        <InfoPageViewToolbar {...props} />
      </MockAuthProvider>,
    )
    it("renders expected error components", () => {
      expect(wrapper.find(ErrorNotification)).toHaveLength(1)
    })
    it("does not render edit button", () => {
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.find(IconButton)).not.toExist()
      expect(wrapper.find(Tooltip)).not.toExist()
    })
  })
})
