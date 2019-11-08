import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import DialogTitleDisplay from "./DialogTitleDisplay"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"

describe("DialogTitleDisplay", () => {
  const handleCloseSpy = sinon.spy()
  const props = {
    title: "Strain Details",
    handleClose: handleCloseSpy,
  }
  const wrapper = shallow(<DialogTitleDisplay {...props} />)
  it("always renders one IconButton", () => {
    expect(wrapper.find(IconButton)).toHaveLength(1)
  })
  it("displays the correct text", () => {
    expect(wrapper.find(DialogTitle).text()).toContain(props.title)
  })
  it("calls handleClose on button click", () => {
    wrapper.find(IconButton).simulate("click")
    expect(handleCloseSpy.calledOnce).toBe(true)
  })
})
