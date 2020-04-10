import React from "react"
import { shallow } from "enzyme"
import ContactPage from "./ContactPage"
import Grid from "@material-ui/core/Grid"
import ContactForm from "./ContactForm"

describe("Contact/ContactPage", () => {
  const wrapper = shallow(<ContactPage />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(ContactForm)).toHaveLength(1)
    })
  })
})
