import React from "react"
import renderer from "react-test-renderer"
import { shallow, mount } from "enzyme"
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

test("matching a snapshot of Availability", () => {
  const availability = {
    type: "data",
    id: "1",
    attributes: {
      availability: [
        { name: "Strains", amount: 1927 },
        { name: "Plasmids", amount: 882 },
        { name: "Antibodies", amount: 12 },
        { name: "cDNA library", amount: 1 },
        { name: "Genomic library", amount: 1 },
      ],
    },
  }
  const fetchAvailability = jest.fn()

  const component = renderer.create(
    <Availability
      availability={availability}
      fetchAvailability={fetchAvailability}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
