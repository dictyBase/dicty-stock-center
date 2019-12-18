import React from "react"
import { renderHook } from "react-hooks-testing-library"
import { appBarReducer, useAppBarStore } from "./AppBarContext"
import { appBarTypes } from "constants/appBar"

describe("Stocks/Catalogs/common/AppBar/AppBarContext", () => {
  describe("appBarReducer", () => {
    it("returns initial state if no changes", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      expect(appBarReducer(initialState, {})).toEqual(initialState)
    })

    it("should handle SET_FILTER", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: appBarTypes.SET_FILTER,
        payload: "descriptor",
      }
      const expectedState = {
        filter: action.payload,
        searchValue: "",
        helpDialogOpen: false,
      }
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_SEARCH_VALUE", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: appBarTypes.SET_SEARCH_VALUE,
        payload: "tester",
      }
      const expectedState = {
        filter: "id",
        searchValue: action.payload,
        helpDialogOpen: false,
      }
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_HELP_DIALOG_OPEN", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: appBarTypes.SET_HELP_DIALOG_OPEN,
        payload: true,
      }
      const expectedState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: true,
      }
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })
  })
})

describe("useAppBarStore", () => {
  it("should throw error if not used in Provider", () => {
    const wrapper = ({ children }) => <div>{children}</div>
    const { result } = renderHook(() => useAppBarStore(), { wrapper })
    expect(() => result.current).toThrow()
  })
})
