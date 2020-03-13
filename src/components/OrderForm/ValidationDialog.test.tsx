import React from "react"
import { shallow } from "enzyme"
import ValidationDialog from "./ValidationDialog"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

describe("OrderForm/ValidationDialog", () => {
  const wrapper = shallow(<ValidationDialog />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogContent)).toHaveLength(1)
      expect(wrapper.find(DialogContentText)).toHaveLength(1)
      expect(wrapper.find(DialogTitle)).toHaveLength(1)
    })
  })
})
