import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { OrderForm } from "./OrderForm"
import { Helmet } from "react-helmet"
// import { Form, Formik } from "formik"

describe("OrderForm/OrderForm", () => {
  const props = {
    classes: {},
    items: [],
    removeItem: jest.fn(),
  }
  const wrapper = mount(
    <MockedProvider>
      <OrderForm {...props} />
    </MockedProvider>,
  )
  // const mutation = wrapper.find(Mutation).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      // expect(mutation.find(Formik)).toHaveLength(1)
      // expect(mutation.find(Form)).toHaveLength(1)
    })
  })
})
