import React from "react"
import { mount } from "enzyme"
import EditablePanel from "./EditablePanel"
import InlineEditor from "components/InlineEditor"
import PanelLoader from "./PanelLoader"
import { MockAuthProvider } from "utils/testing"

describe("Home/EditablePanel", () => {
  describe("initial render", () => {
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <EditablePanel slug="dsc-intro" skeletonCount={5} />
      </MockAuthProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(PanelLoader)).toExist()
    })
  })
})
