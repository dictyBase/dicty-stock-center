import React from "react"
import { shallow } from "enzyme"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import IconButton from "@material-ui/core/IconButton"
import DetailsHeaderSnackbar from "./DetailsHeaderSnackbar"

describe("Stocks/Details/common/DetailsHeaderCopyIcon", () => {
  const props = {
    id: "DBS0351367",
  }
  const wrapper = shallow(<DetailsHeaderCopyIcon {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      // should not display snackbar initially
      expect(wrapper.find(DetailsHeaderSnackbar)).toHaveLength(0)
    })
  })

  describe("button clicking", () => {
    // set up mocks
    global.navigator.clipboard = {
      writeText: jest.fn(() => Promise.resolve()),
    }
    global.window.setTimeout = jest.fn()
    it("should write to clipboard on click", () => {
      wrapper.find(IconButton).simulate("click")
      wrapper.update()
      expect(global.navigator.clipboard.writeText).toHaveBeenCalled()
      expect(global.window.setTimeout).toHaveBeenCalled()
    })
  })
})
