import React from "react"
import { mount } from "enzyme"
import HelpDialogContent from "./HelpDialogContent"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"

describe("Stocks/Catalogs/common/HelpDialogContent", () => {
  const wrapper = mount(<HelpDialogContent />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(DialogContent).exists()).toBe(true)
      expect(wrapper.find(DialogContentText).exists()).toBe(true)
    })
  })
})
