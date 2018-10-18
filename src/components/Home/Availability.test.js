import React from "react"
import { mount } from "enzyme"
import sinon from "sinon"
import "jest-styled-components"
import "../../setupTests"
import { Availability } from "./Availability"
import { PanelGray } from "styles"

describe("Home/Availability", () => {
  let props
  let mountedAvailabilityPage
  const availabilityPage = () => {
    if (!mountedAvailabilityPage) {
      mountedAvailabilityPage = mount(<Availability {...props} />)
    }
    return mountedAvailabilityPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      fetchInfoPage: undefined,
      isFetching: undefined,
    }
    mountedAvailabilityPage = undefined
  })
  describe("initial render", () => {
    beforeEach(() => {
      props = {
        availability: {
          data: [],
        },
        fetchAvailability: () => {},
      }
    })

    it("always renders PanelGray", () => {
      expect(availabilityPage().find(PanelGray).length).toBe(1)
    })
    it("calls componentDidMount", () => {
      sinon.spy(Availability.prototype, "componentDidMount")
      availabilityPage()
      expect(Availability.prototype.componentDidMount.calledOnce).toEqual(true)
    })
  })
})
