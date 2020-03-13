import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/react-testing"
import OrderForm from "./OrderForm"
import { Helmet } from "react-helmet"
import { Form, Formik } from "formik"
import { CartProvider } from "components/ShoppingCart/CartStore"

describe("OrderForm/OrderForm", () => {
  const wrapper = mount(
    <MockedProvider>
      <CartProvider>
        <BrowserRouter>
          <OrderForm />
        </BrowserRouter>
      </CartProvider>
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
