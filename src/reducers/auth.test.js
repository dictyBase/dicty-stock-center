import reducer from "reducers/auth"
import { dsctypes } from "constants/dsctypes"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} = dsctypes

describe("reducers", () => {
  describe("auth reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({})
    })

    it("should handle LOGIN_REQUEST", () => {
      expect(
        reducer(
          {},
          {
            type: LOGIN_REQUEST,
            payload: {
              isFetching: true,
              isAuthenticated: false,
              provider: "google",
            },
          },
        ),
      ).toEqual({
        isFetching: true,
        isAuthenticated: false,
        provider: "google",
      })
    })

    it("should handle LOGIN_SUCCESS", () => {
      expect(
        reducer(
          {},
          {
            type: LOGIN_SUCCESS,
            payload: {
              isFetching: false,
              isAuthenticated: true,
              token: "adsfgjkngdfa",
              user: { name: "John" },
            },
          },
        ),
      ).toEqual({
        isFetching: false,
        isAuthenticated: true,
        token: "adsfgjkngdfa",
        user: { name: "John" },
        error: null,
      })
    })

    it("should handle LOGIN_FAILURE", () => {
      expect(
        reducer(
          {},
          {
            type: LOGIN_FAILURE,
            payload: {
              isFetching: false,
              isAuthenticated: false,
              error: "danger",
              provider: null,
            },
          },
        ),
      ).toEqual({
        isFetching: false,
        isAuthenticated: false,
        error: "danger",
        provider: null,
      })
    })

    it("should handle LOGOUT_REQUEST", () => {
      expect(
        reducer(
          {},
          {
            type: LOGOUT_REQUEST,
            payload: {
              isFetching: true,
            },
          },
        ),
      ).toEqual({
        isFetching: true,
      })
    })

    it("should handle LOGOUT_SUCCESS", () => {
      expect(
        reducer(
          {},
          {
            type: LOGOUT_SUCCESS,
            payload: {
              isFetching: false,
              isAuthenticated: false,
            },
          },
        ),
      ).toEqual({
        isFetching: false,
        isAuthenticated: false,
        provider: null,
        user: null,
        token: null,
      })
    })
  })
})
