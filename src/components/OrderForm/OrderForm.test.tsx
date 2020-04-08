import React from "react"
import { mount } from "enzyme"
import OrderForm, { getIDs, getUserVariables } from "./OrderForm"
import { Helmet } from "react-helmet"
import { Form, Formik } from "formik"
import { CREATE_ORDER } from "graphql/mutations"
import { MockCartProvider } from "utils/testing"
import useCartItems from "hooks/useCartItems"

// set up all of our mocks
const mockHistoryPush = jest.fn()
const formikFunctions = {
  setSubmitting: jest.fn(),
  setErrors: jest.fn(),
  setStatus: jest.fn(),
  setTouched: jest.fn(),
  setValues: jest.fn(),
  setFieldValue: jest.fn(),
  setFieldError: jest.fn(),
  setFieldTouched: jest.fn(),
  validateForm: jest.fn(),
  validateField: jest.fn(),
  setFormikState: jest.fn(),
  resetForm: jest.fn(),
  submitForm: jest.fn(),
}

jest.mock("hooks/useCartItems")
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const mockedUseCartItems = useCartItems as jest.Mock
mockedUseCartItems.mockReturnValue({
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  emptyCart: jest.fn(),
})

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

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

describe("OrderForm/OrderForm", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <MockCartProvider mocks={[]} addedItems={[]}>
        <OrderForm />
      </MockCartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(Formik)).toHaveLength(1)
      expect(wrapper.find(Form)).toHaveLength(1)
    })
  })
  describe("onSubmit", () => {
    let addedItems = [] as Array<CartItem>
    addedItems.fill(
      {
        id: "DBS1234",
        name: "test strain",
        summary: "this is a test strain",
        fee: "30.00",
      },
      0,
      10,
    )
    const mocks = [
      {
        request: {
          query: CREATE_ORDER,
          variables: {
            input: {
              courier: mockValues.shippingAccount,
              courier_account: mockValues.shippingAccountNumber,
              comments: mockValues.comments,
              payment: mockValues.paymentMethod,
              purchase_order_num: mockValues.purchaseOrderNum,
              status: "IN_PREPARATION",
              consumer: mockValues.email,
              payer: mockValues.payerEmail,
              purchaser: mockValues.email,
              items: addedItems.map((item) => item.id),
            },
          },
        },
        result: {
          data: {
            createOrder: {
              id: "123456",
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockCartProvider mocks={mocks} addedItems={addedItems}>
        <OrderForm />
      </MockCartProvider>,
    )
    it("should handle onSubmit properly", async () => {
      const onSubmit = wrapper.find(Formik).first().prop("onSubmit")
      await onSubmit(mockValues, formikFunctions)
      expect(formikFunctions.setSubmitting).toHaveBeenCalledTimes(1)
      expect(formikFunctions.setSubmitting).toHaveBeenCalledWith(false)
      expect(mockHistoryPush).toHaveBeenCalledTimes(1)
      expect(useCartItems).toHaveBeenCalledWith(addedItems)
    })
  })
})

describe("OrderForm/getIDs", () => {
  it("should return array of IDs", () => {
    const items = [
      {
        id: "DBS123",
        name: "test",
        summary: "test summary",
        fee: "30.00",
      },
      {
        id: "DBS456",
        name: "test",
        summary: "test summary",
        fee: "30.00",
      },
    ]
    const ids = ["DBS123", "DBS456"]
    expect(getIDs(items)).toEqual(ids)
  })
})

describe("OrderForm/getUserVariables", () => {
  it("should return id but no email if id is passed", () => {
    expect(getUserVariables(mockValues, "999")).toStrictEqual({
      variables: {
        id: "999",
        input: {
          first_name: "Art",
          last_name: "Vandelay",
          organization: "Vandelay Industries",
          group_name: "Steinbrenner",
          first_address: "123 Main St",
          second_address: "",
          city: "New York City",
          state: "NY",
          zipcode: "10001",
          country: "USA",
          phone: "123-456-7890",
          is_active: true,
        },
      },
    })
  })
  it("should include email if no id passed", () => {
    expect(getUserVariables(mockValues)).toStrictEqual({
      variables: {
        input: {
          first_name: "Art",
          last_name: "Vandelay",
          email: "art@vandelayindustries.com",
          organization: "Vandelay Industries",
          group_name: "Steinbrenner",
          first_address: "123 Main St",
          second_address: "",
          city: "New York City",
          state: "NY",
          zipcode: "10001",
          country: "USA",
          phone: "123-456-7890",
          is_active: true,
        },
      },
    })
  })
})
