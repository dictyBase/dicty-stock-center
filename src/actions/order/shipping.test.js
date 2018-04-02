import * as actions from "actions/order/shipping"
import { dsctypes } from "constants/dsctypes"

const { ADD_SHIPPING } = dsctypes

describe("actions", () => {
  describe("order", () => {
    it("should create an action to add shipping information", () => {
      const user = {
        data: {
          type: "user",
          id: "25",
          attributes: {
            first_name: "John",
            last_name: "Smith",
            email: "john@gmail.com",
            organization: "Northwestern",
            group: "Bio",
            address: {
              first: "N Lake Shore",
              second: ""
            },
            city: "Chicago",
            state: "IL",
            zip: "60601",
            country: "USA",
            phone: ""
          }
        }
      }
      const details = {
        shipAccount: "UPS",
        shipAccountNum: "123456",
        comments: ""
      }
      const consumer = {
        type: "user",
        id: "25",
        firstName: "John",
        lastName: "Smith",
        email: "john@gmail.com",
        org: "Northwestern",
        group: "Bio",
        address: "N Lake Shore",
        address2: "",
        city: "Chicago",
        state: "IL",
        zip: "60601",
        country: "USA",
        phone: ""
      }
      const expectedAction = {
        type: ADD_SHIPPING,
        initialized: true,
        consumer,
        details
      }
      expect(actions.addShipping(user, details)).toEqual(expectedAction)
    })
  })
})
