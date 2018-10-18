import React from "react"
import "jest-styled-components"
import "../../setupTests"
import SubmitLoader from "./SubmitLoader"
import { shallow } from "enzyme"

describe("form/SubmitLoader", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SubmitLoader />)
  })

  it("renders an animated fa icon", () => {
    const icon = wrapper.find("i.fa-spinner")
    expect(icon).toExist
  })
})
