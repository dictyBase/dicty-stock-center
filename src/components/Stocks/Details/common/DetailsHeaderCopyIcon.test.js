import React from "react"
import { mount } from "enzyme"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DetailsHeaderSnackbar from "./DetailsHeaderSnackbar"

describe("Stocks/Details/common/DetailsHeaderCopyIcon", () => {
  const props = {
    id: "DBS0351367",
  }
  const wrapper = mount(<DetailsHeaderCopyIcon {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      // should not display snackbar initially
      expect(wrapper.find(DetailsHeaderSnackbar)).toHaveLength(0)
    })
  })
})
