import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import ShippingPage from "./ShippingPage"
import LeftColumn from "../LeftColumn"
import ShippingPageRightColumn from "./ShippingPageRightColumn"
import { Formik } from "formik"
import initialValues from "../utils/initialValues"

const mockValues = {
  firstName: "Art",
  lastName: "Vandelay",
  email: "art@vandelayindustries.com",
  organization: "Vandelay Industries",
  lab: "Steinbrenner",
  address1: "123 Main St",
  address2: "",
  city: "New York City",
  state: "NY",
  zip: "10001",
  country: "USA",
  phone: "123-456-7890",
  shippingAccount: "FedEx",
  shippingAccountNumber: "99999999",
  comments: "test comment",
}

const mockSetFormData = jest.fn()
const mockNextStep = jest.fn()
const mockSubmitForm = jest.fn()

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useFormikContext: () => ({
    submitForm: mockSubmitForm,
    values: mockValues,
  }),
}))

describe("OrderForm/Shipping/ShippingPage", () => {
  const props = {
    formData: initialValues,
    setFormData: mockSetFormData,
    nextStep: mockNextStep,
  }
  const wrapper = mount(
    <BrowserRouter>
      <ShippingPage {...props} />
    </BrowserRouter>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Formik)).toHaveLength(1)
      expect(wrapper.find(LeftColumn)).toHaveLength(1)
      expect(wrapper.find(ShippingPageRightColumn)).toHaveLength(1)
    })
  })
})
