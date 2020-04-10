import React from "react"
import { shallow } from "enzyme"
import ContactForm from "./ContactForm"

describe("Contact/ContactForm", () => {
  const wrapper = shallow(<ContactForm />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find("div")).toHaveLength(1)
    })
  })
})
