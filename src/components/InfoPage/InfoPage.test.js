import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { InfoPage } from "./InfoPage"
import { InfoPageView } from "./InfoPageView"

describe("InfoPage/InfoPage", () => {
  const props = {
    page: {
      data: {
        attributes: {},
      },
    },
    match: {
      params: {
        name: "Name",
      },
    },
    fetchInfoPage: () => {},
    isFetching: false,
  }
  const slugName = "dsc-order"

  it("calls componentDidMount", () => {
    sinon.spy(InfoPage.prototype, "componentDidMount")
    const wrapper = mount(<InfoPage {...props} />)
    expect(InfoPage.prototype.componentDidMount.calledOnce).toEqual(true)
  })
})
