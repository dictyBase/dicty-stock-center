import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import PaymentPage from "./PaymentPage"
import LeftColumn from "../LeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"
import { Formik } from "formik"
import initialValues from "../utils/initialValues"

const mockValues = {
  payerFirstName: "Art",
  payerLastName: "Vandelay",
  payerEmail: "art@vandelayindustries.com",
  payerOrganization: "Vandelay Industries",
  payerLab: "Steinbrenner",
  payerAddress1: "123 Main St",
  payerAddress2: "",
  payerCity: "New York City",
  payerState: "NY",
  payerZip: "10010",
  payerCountry: "USA",
  payerPhone: "123-456-7890",
  paymentMethod: "Credit card",
  purchaseOrderNum: "99999",
}

const mockSetFormData = jest.fn()
const mockNextStep = jest.fn()
const mockPrevStep = jest.fn()
const mockSubmitForm = jest.fn()

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useFormikContext: () => ({
    submitForm: mockSubmitForm,
    values: mockValues,
  }),
}))

describe("OrderForm/Payment/PaymentPage", () => {
  const props = {
    formData: initialValues,
    setFormData: mockSetFormData,
    prevStep: mockPrevStep,
    nextStep: mockNextStep,
  }
  const wrapper = mount(
    <BrowserRouter>
      <PaymentPage {...props} />
    </BrowserRouter>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Formik)).toHaveLength(1)
      expect(wrapper.find(LeftColumn)).toHaveLength(1)
      expect(wrapper.find(PaymentPageRightColumn)).toHaveLength(1)
    })
  })
})
