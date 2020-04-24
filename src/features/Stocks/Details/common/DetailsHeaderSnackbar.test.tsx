import React from "react"
import { mount } from "enzyme"
import DetailsHeaderSnackbar from "./DetailsHeaderSnackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/Details/common/DetailsHeaderSnackbar", () => {
  const setSnackbarOpenSpy = jest.fn()
  const props = {
    id: "DBS0351367",
    setSnackbarOpen: setSnackbarOpenSpy,
  }
  const wrapper = mount(<DetailsHeaderSnackbar {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(SnackbarContent)).toHaveLength(1)
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
  describe("button clicking", () => {
    it("calls correct function on button click", () => {
      wrapper.find(IconButton).first().simulate("click")
      expect(setSnackbarOpenSpy).toHaveBeenCalledTimes(1)
    })
  })
})
