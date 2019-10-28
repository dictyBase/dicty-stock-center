import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import { OrderForm } from "./OrderForm"
import { Helmet } from "react-helmet"
import { Form, Formik } from "formik"

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
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(Formik)).toHaveLength(1)
      expect(wrapper.find(Form)).toHaveLength(1)
    })
  })
})
