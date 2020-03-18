import React from "react"
import { mount } from "enzyme"
import OrderForm from "./OrderForm"
import { Helmet } from "react-helmet"
import { Form, Formik } from "formik"
import { POST_ORDER } from "graphql/mutations"
import { MockCartProvider } from "utils/testing"
import useCartItems from "hooks/useCartItems"

// set up all of our mocks=
const mockHistoryPush = jest.fn()
const formikFunctions = {
  setSubmitting: jest.fn(),
}

jest.mock("hooks/useCartItems")
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

useCartItems.mockReturnValue({
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
          query: POST_ORDER,
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
              items: addedItems.map(item => item.id),
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
      const onSubmit = wrapper
        .find(Formik)
        .first()
        .prop("onSubmit")
      await onSubmit(mockValues, formikFunctions)
      expect(formikFunctions.setSubmitting).toHaveBeenCalledTimes(1)
      expect(formikFunctions.setSubmitting).toHaveBeenCalledWith(false)
      expect(mockHistoryPush).toHaveBeenCalledTimes(1)
      expect(useCartItems).toHaveBeenCalledWith(addedItems)
    })
  })
})
