import * as actions from "actions/auth"
import { dsctypes } from "constants/dsctypes"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_ROLE_REQUEST,
  FETCH_ROLE_SUCCESS,
  FETCH_ROLE_FAILURE,
  FETCH_NON_AUTH_ROLE_REQUEST,
  FETCH_NON_AUTH_ROLE_SUCCESS,
  FETCH_NON_AUTH_ROLE_FAILURE,
  FETCH_PERMISSION_REQUEST,
  FETCH_PERMISSION_SUCCESS,
  FETCH_PERMISSION_FAILURE
} = dsctypes

describe("auth actions", () => {
  describe("login request", () => {
    it("should create an action to request user login", () => {
      const provider = "google"
      const expectedAction = {
        type: LOGIN_REQUEST,
        payload: {
          isFetching: true,
          provider: provider
        }
      }
      expect(actions.requestLogin(provider)).toEqual(expectedAction)
    })
  })
  describe("login success", () => {
    it("should create an action for a successful login", () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
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
      const expectedAction = {
        type: LOGIN_SUCCESS,
        payload: {
          isFetching: false,
          token: token,
          user: user
        }
      }
      expect(actions.receiveLogin({ user, token })).toEqual(expectedAction)
    })
  })
  describe("login error", () => {
    it("should create an action for login failure", () => {
      const error = "could not log in"
      const expectedAction = {
        type: LOGIN_FAILURE,
        payload: {
          isFetching: false,
          error: error
        }
      }
      expect(actions.loginError(error)).toEqual(expectedAction)
    })
  })
  describe("fetch user request", () => {
    it("should create an action to fetch user data", () => {
      const expectedAction = {
        type: FETCH_USER_REQUEST,
        payload: {
          isFetching: true
        }
      }
      expect(actions.fetchUserRequest()).toEqual(expectedAction)
    })
  })
  describe("fetch user success", () => {
    it("should create an action for successful user fetch request", () => {
      const json = {}
      const expectedAction = {
        type: FETCH_USER_SUCCESS,
        payload: {
          isFetching: false,
          json: json
        }
      }
      expect(actions.fetchUserSuccess(json)).toEqual(expectedAction)
    })
  })
  describe("fetch user error", () => {
    it("should create an action for fetch user failure", () => {
      const error = "could not fetch user"
      const expectedAction = {
        type: FETCH_USER_FAILURE,
        payload: {
          error: error
        }
      }
      expect(actions.fetchUserFailure(error)).toEqual(expectedAction)
    })
  })
  describe("fetch role request", () => {
    it("should create an action to fetch role data", () => {
      const expectedAction = {
        type: FETCH_ROLE_REQUEST,
        payload: {
          isFetching: true
        }
      }
      expect(actions.fetchRoleRequest()).toEqual(expectedAction)
    })
  })
  describe("fetch role success", () => {
    it("should create an action for successful role fetch request", () => {
      const json = {}
      const expectedAction = {
        type: FETCH_ROLE_SUCCESS,
        payload: {
          isFetching: false,
          json: json
        }
      }
      expect(actions.fetchRoleSuccess(json)).toEqual(expectedAction)
    })
  })
  describe("fetch role error", () => {
    it("should create an action for fetch role failure", () => {
      const error = "could not fetch roles"
      const expectedAction = {
        type: FETCH_ROLE_FAILURE,
        payload: {
          error: error
        }
      }
      expect(actions.fetchRoleFailure(error)).toEqual(expectedAction)
    })
  })
})
