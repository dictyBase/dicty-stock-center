import React from "react"
import { mount } from "enzyme"
import ValidationDialog from "./ValidationDialog"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

const mockSetModalOpen = jest.fn()

describe("OrderForm/ValidationDialog", () => {
  const wrapper = mount(
    <ValidationDialog modalOpen={true} setModalOpen={mockSetModalOpen} />,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogContent)).toHaveLength(1)
      expect(wrapper.find(DialogContentText)).toHaveLength(1)
      expect(wrapper.find(DialogTitle)).toHaveLength(1)
    })
  })
  // describe("close modal", () => {
  //   let mockEvent
  //   beforeEach(() => {
  //     mockEvent = { keyCode: 27 }
  //   })
  //   window.dispatchEvent(new KeyboardEvent("keydown", mockEvent))
  //   wrapper.update()
  //   expect(mockSetModalOpen).toHaveBeenCalledTimes(1)
  // })
})
