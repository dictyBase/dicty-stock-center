import * as actions from "actions/stockCenter"
import { dsctypes } from "constants/dsctypes"

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  STRAINS_FETCH_FAILURE
} = dsctypes

const server = process.env.REACT_APP_API_SERVER || "http://localhost:8080"

describe("stockCenter actions", () => {
  describe("receive availability", () => {
    it("should create an action to receive data availability", () => {
      const data = {
        attributes: {
          availability: ""
        }
      }
      const expectedAction = {
        type: AVAILABILITY_FETCH_SUCCESS,
        payload: {
          isFetching: false,
          availability: data.attributes.availability
        }
      }
      expect(actions.receiveAvailability(data)).toEqual(expectedAction)
    })
  })
  describe("request strains", () => {
    it("should create an action to request strains", () => {
      const expectedAction = {
        type: STRAINS_FETCH_REQUEST
      }
      expect(actions.requestStrains()).toEqual(expectedAction)
    })
  })
  describe("receive strains", () => {
    it("should create an action to receive strains", () => {
      const data = {
        data: {},
        links: {},
        meta: {}
      }
      const expectedAction = {
        type: STRAINS_FETCH_SUCCESS,
        payload: {
          data: data.data,
          links: data.links,
          meta: data.meta
        }
      }
      expect(actions.receiveStrains(data)).toEqual(expectedAction)
    })
  })
  describe("fail receiving strains", () => {
    it("should create an action for request strains failure", () => {
      const error = "could not fetch"
      const expectedAction = {
        type: STRAINS_FETCH_FAILURE,
        payload: {
          error
        }
      }
      expect(actions.strainsFetchFailure(error)).toEqual(expectedAction)
    })
  })
})
