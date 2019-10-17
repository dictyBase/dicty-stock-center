import React from "react"
import { shallow } from "enzyme"
import MyDscMainContent from "./MyDscMainContent"
import PanelWrapper from "components/common/PanelWrapper"

describe("MyDsc/MyDscMainContent", () => {
  describe("initial render", () => {
    const props = {
      provider: "google",
      data: {
        id: "123",
        attributes: { email: "george@costanza.com", name: "George Costanza" },
      },
    }
    const wrapper = shallow(<MyDscMainContent {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
    })
  })
})
