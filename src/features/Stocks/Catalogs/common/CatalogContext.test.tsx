import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import {
  catalogReducer,
  useCatalogStore,
  CatalogActionType,
} from "./CatalogContext"

describe("Stocks/Catalogs/common/CatalogContext", () => {
  describe("catalogReducer", () => {
    const initialState = {
      queryVariables: { cursor: 0, filter: "" },
      checkedItems: [],
    }
    it("returns initial state if no changes", () => {
      // @ts-ignore
      expect(catalogReducer(initialState, {})).toEqual(initialState)
    })

    it("should handle SET_QUERY_VARIABLES", () => {
      const action = {
        type: CatalogActionType.SET_QUERY_VARIABLES,
        payload: {
          cursor: 0,
          filter: "",
          limit: 10,
        },
      }
      const expectedState = {
        queryVariables: action.payload,
        checkedItems: [],
      }
      // @ts-ignore
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_CHECKED_ITEMS", () => {
      const action = {
        type: CatalogActionType.SET_CHECKED_ITEMS,
        payload: [
          {
            id: "DBS123456",
            label: "test1",
            summary: "this is a test summary",
          },
        ],
      }
      const expectedState = {
        queryVariables: { cursor: 0, filter: "" },
        checkedItems: action.payload,
      }
      // @ts-ignore
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })
  })
})

// describe("useCatalogStore", () => {
//   it("should throw error if not used in Provider", () => {
//     const wrapper = ({ children }) => <div>{children}</div>
//     const { result } = renderHook(() => useCatalogStore(), { wrapper })
//     expect(() => result.current).toThrow()
//   })
// })
