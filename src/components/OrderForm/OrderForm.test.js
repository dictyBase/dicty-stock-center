import React from "react"
import { shallow } from "enzyme"
import { OrderForm } from "./OrderForm"
import Grid from "@material-ui/core/Grid"
import { Helmet } from "react-helmet"
import { Mutation } from "react-apollo"
// import { Form, Formik } from "formik"

// needs coverage for 84,85,86,89,107

describe("OrderForm/OrderForm", () => {
  const props = {
    classes: {},
    items: [],
    removeItem: jest.fn(),
  }
  const wrapper = shallow(<OrderForm {...props} />)
  // const mutation = wrapper.find(Mutation).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(Mutation)).toHaveLength(1)
      // expect(mutation.find(Formik)).toHaveLength(1)
      // expect(mutation.find(Form)).toHaveLength(1)
    })
  })
})
