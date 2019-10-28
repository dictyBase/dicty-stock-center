import React from "react"
import { mount } from "enzyme"
import BrowserWarningContent from "./BrowserWarningContent"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"

describe("Home/BrowserWarningContent", () => {
  const wrapper = mount(<BrowserWarningContent />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(DialogContent)).toHaveLength(1)
      expect(wrapper.find(DialogContentText)).toHaveLength(1)
    })
  })
})
