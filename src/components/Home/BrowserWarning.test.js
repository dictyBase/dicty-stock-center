import React from "react"
import { mount } from "enzyme"
import BrowserWarning from "./BrowserWarning"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import BrowserWarningContent from "./BrowserWarningContent"

describe("Home/BrowserWarning", () => {
  const wrapper = mount(<BrowserWarning />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogActions)).toHaveLength(1)
      expect(wrapper.find(DialogTitle)).toHaveLength(1)
      expect(wrapper.find(BrowserWarningContent)).toHaveLength(1)
    })
  })
})
