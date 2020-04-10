import React from "react"
import { shallow } from "enzyme"
import MyDscMainContent from "./MyDscMainContent"
import PanelWrapper from "features/common/PanelWrapper"

describe("MyDsc/MyDscMainContent", () => {
  describe("initial render", () => {
    const props = {
      provider: "google",
      data: {
        id: "9999",
        email: "wizardofloneliness@nathanforyou.com",
        first_name: "Nathan",
        last_name: "Fielder",
      },
    }
    const wrapper = shallow(<MyDscMainContent {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
    })
  })
})
