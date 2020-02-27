import React from "react"
import { mount } from "enzyme"
import InfoPage from "./InfoPage"
import Loader from "components/common/Loader"
import { MockAuthProvider } from "utils/testing"

describe("InfoPage/InfoPage", () => {
  describe("initial render", () => {
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <InfoPage />
      </MockAuthProvider>,
    )
    it("renders loader first", () => {
      expect(wrapper.find(Loader)).toHaveLength(1)
    })
  })
})
