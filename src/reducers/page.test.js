import reducer from "reducers/page"
import { dsctypes } from "constants/dsctypes"

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} = dsctypes

const initialState = {
  content: null
}

describe("page reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle EDIT_PAGE", () => {
    expect(
      reducer(
        {},
        {
          type: EDIT_PAGE,
          payload: {
            content: "data"
          }
        }
      )
    ).toEqual({
      content: "data"
    })
  })

  it("should handle SAVE_PAGE_REQUEST", () => {
    expect(
      reducer(
        {},
        {
          type: SAVE_PAGE_REQUEST,
          isFetching: true
        }
      )
    ).toEqual({
      isFetching: true
    })
  })

  it("should handle SAVE_PAGE_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: SAVE_PAGE_SUCCESS,
          isFetching: false
        }
      )
    ).toEqual({
      isFetching: false
    })
  })

  it("should handle SAVE_PAGE_FAILURE", () => {
    expect(
      reducer(
        {},
        {
          type: SAVE_PAGE_FAILURE,
          isFetching: false,
          error: "404"
        }
      )
    ).toEqual({
      isFetching: false,
      error: "404"
    })
  })

  it("should handle FETCH_PAGE_REQUEST", () => {
    expect(
      reducer(
        {},
        {
          type: FETCH_PAGE_REQUEST,
          isFetching: true
        }
      )
    ).toEqual({
      isFetching: true
    })
  })

  it("should handle FETCH_PAGE_SUCCESS", () => {
    const slugName = {
      data: {
        attributes: {
          slug: "slug"
        }
      }
    }
    expect(
      reducer(
        {},
        {
          type: FETCH_PAGE_SUCCESS,
          isFetching: false,
          slugName: slugName,
          payload: {
            data: {
              attributes: {
                slug: "slug"
              }
            }
          }
        }
      )
    ).toEqual({
      isFetching: false,
      slug: slugName
    })
  })

  it("should handle FETCH_PAGE_FAILURE", () => {
    expect(
      reducer(
        {},
        {
          type: FETCH_PAGE_FAILURE,
          isFetching: false,
          error: "404"
        }
      )
    ).toEqual({
      isFetching: false,
      error: "404"
    })
  })
})
