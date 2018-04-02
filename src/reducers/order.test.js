import reducer from "reducers/order"
import { dsctypes } from "constants/dsctypes"

const {
  ADD_SHIPPING,
  ADD_PAYMENT,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE
} = dsctypes

describe("reducers", () => {
  describe("order reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        initialized: false
      })
    })

    it("should handle ADD_SHIPPING", () => {
      expect(
        reducer(
          {},
          {
            type: ADD_SHIPPING,
            initialized: true,
            consumer: { firstName: "John", lastName: "Smith" },
            details: {
              shipAccount: "UPS",
              shipAccountNum: "20",
              comments: ""
            }
          }
        )
      ).toEqual({
        initialized: true,
        consumer: { firstName: "John", lastName: "Smith" },
        shipping: {
          account: "UPS",
          accountNum: "20",
          comments: ""
        }
      })
    })

    it("should handle ADD_PAYMENT", () => {
      expect(
        reducer(
          {},
          {
            type: ADD_PAYMENT,
            initialized: true,
            payer: { firstName: "Sara", lastName: "Brown" },
            payment: {
              method: "Credit",
              poNum: ""
            }
          }
        )
      ).toEqual({
        initialized: true,
        payer: { firstName: "Sara", lastName: "Brown" },
        payment: {
          method: "Credit",
          poNum: ""
        }
      })
    })

    it("should handle SUBMIT_REQUEST", () => {
      expect(
        reducer(
          {},
          {
            type: SUBMIT_REQUEST,
            submitting: true
          }
        )
      ).toEqual({
        submitting: true
      })
    })

    it("should handle SUBMIT_SUCCESS", () => {
      expect(
        reducer(
          {},
          {
            type: SUBMIT_SUCCESS,
            submitting: false,
            order: { id: "25" }
          }
        )
      ).toEqual({
        submitting: false,
        id: "25"
      })
    })

    it("should handle SUBMIT_FAILURE", () => {
      expect(
        reducer(
          {},
          {
            type: SUBMIT_FAILURE,
            submitting: false,
            error: { message: "error 404" }
          }
        )
      ).toEqual({
        submitting: false,
        error: "error 404"
      })
    })
  })
})
