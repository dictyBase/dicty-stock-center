import React from "react"
import { mount } from "enzyme"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SubmitButton, { getIDs, getUserVariables } from "./SubmitButton"
import { GET_USER_BY_EMAIL } from "graphql/queries"
import { CREATE_ORDER, CREATE_USER, UPDATE_USER } from "graphql/mutations"
import { MockCartProvider } from "utils/testing"
import useCartItems from "hooks/useCartItems"
import waitForExpect from "wait-for-expect"
import { CartItem } from "../types"

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

// set up all of our mocks
const mockHistoryPush = jest.fn()
const mockSubmitForm = jest.fn()

jest.mock("hooks/useCartItems")
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))
jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useFormikContext: () => ({
    submitForm: mockSubmitForm,
    values: mockValues,
  }),
}))

const mockedUseCartItems = useCartItems as jest.Mock
mockedUseCartItems.mockReturnValue({
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  emptyCart: jest.fn(),
})

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

const createUserVariables = {
  input: {
    first_name: mockValues.firstName,
    last_name: mockValues.lastName,
    email: mockValues.email,
    organization: mockValues.organization,
    group_name: mockValues.lab,
    first_address: mockValues.address1,
    second_address: mockValues.address2,
    city: mockValues.city,
    state: mockValues.state,
    zipcode: mockValues.zip,
    country: mockValues.country,
    phone: mockValues.phone,
    is_active: true,
  },
}

const updateUserVariables = {
  id: "999",
  input: {
    first_name: mockValues.firstName,
    last_name: mockValues.lastName,
    organization: mockValues.organization,
    group_name: mockValues.lab,
    first_address: mockValues.address1,
    second_address: mockValues.address2,
    city: mockValues.city,
    state: mockValues.state,
    zipcode: mockValues.zip,
    country: mockValues.country,
    phone: mockValues.phone,
    is_active: true,
  },
}

const createOrderVariables = {
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
}

const mockSetSubmitError = jest.fn()

describe("SubmitButton/SubmitButton", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe("initial render", () => {
    const wrapper = mount(
      <MockCartProvider mocks={[]} addedItems={[]}>
        <SubmitButton setSubmitError={mockSetSubmitError} />
      </MockCartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("order submission with existing user", () => {
    const mocks = [
      {
        request: {
          query: GET_USER_BY_EMAIL,
          variables: {
            email: mockValues.email,
          },
        },
        result: {
          data: {
            userByEmail: {
              id: "999",
            },
          },
        },
      },
      {
        request: {
          query: UPDATE_USER,
          variables: updateUserVariables,
        },
        result: {
          data: {
            updateUser: {
              id: "999",
            },
          },
        },
      },
      {
        request: {
          query: CREATE_ORDER,
          variables: createOrderVariables,
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
        <SubmitButton setSubmitError={mockSetSubmitError} />
      </MockCartProvider>,
    )
    it("should process order when updating existing user", async () => {
      wrapper.find("button").first().simulate("click")
      await waitForExpect(() => {
        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
        expect(mockSubmitForm).toHaveBeenCalledTimes(1)
        expect(useCartItems).toHaveBeenCalledWith(addedItems)
        expect(mockSetSubmitError).toHaveBeenCalledTimes(3)
      })
    })
  })
  describe("order submission with nonexistent user", () => {
    const mocks = [
      {
        request: {
          query: GET_USER_BY_EMAIL,
          variables: {
            email: mockValues.email,
          },
        },
        result: {
          errors: [
            {
              message: "could not find user",
              path: ["users"],
              extensions: { code: "NotFound" },
            },
          ],
        },
      },
      {
        request: {
          query: CREATE_USER,
          variables: createUserVariables,
        },
        result: {
          data: {
            createUser: {
              id: "9991",
            },
          },
        },
      },
      {
        request: {
          query: CREATE_ORDER,
          variables: createOrderVariables,
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
      //@ts-ignore
      <MockCartProvider mocks={mocks} addedItems={addedItems}>
        <SubmitButton setSubmitError={mockSetSubmitError} />
      </MockCartProvider>,
    )
    xit("should process order while creating new user", async () => {
      wrapper.find("button").first().simulate("click")
      await waitForExpect(() => {
        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
        expect(mockSubmitForm).toHaveBeenCalledTimes(1)
        expect(useCartItems).toHaveBeenCalledWith(addedItems)
        expect(mockSetSubmitError).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe("order submission with unknown error fetching user", () => {
    const mocks = [
      {
        request: {
          query: GET_USER_BY_EMAIL,
          variables: {
            email: mockValues.email,
          },
        },
        result: {
          errors: [
            {
              message: "unknown error",
              path: ["users"],
              extensions: { code: "Unknown" },
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      //@ts-ignore
      <MockCartProvider mocks={mocks} addedItems={[]}>
        <SubmitButton setSubmitError={mockSetSubmitError} />
      </MockCartProvider>,
    )
    xit("should not call functions designated for successful submit", async () => {
      wrapper.find("button").first().simulate("click")
      await waitForExpect(() => {
        expect(mockHistoryPush).toHaveBeenCalledTimes(0)
        expect(mockSubmitForm).toHaveBeenCalledTimes(0)
        expect(useCartItems).toHaveBeenCalledTimes(0)
      })
    })
    xit("should call setSubmitError if error fetching user", async () => {
      wrapper.find("button").first().simulate("click")
      await waitForExpect(() => {
        expect(mockSetSubmitError).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("SubmitButton/getIDs", () => {
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

describe("SubmitButton/getUserVariables", () => {
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
