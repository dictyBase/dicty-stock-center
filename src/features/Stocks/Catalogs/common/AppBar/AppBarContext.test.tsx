import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import {
  appBarReducer,
  useAppBarStore,
  AppBarActionType,
} from "./AppBarContext"

describe("Stocks/Catalogs/common/AppBar/AppBarContext", () => {
  describe("appBarReducer", () => {
    it("returns initial state if no changes", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      //@ts-ignore
      expect(appBarReducer(initialState, {})).toEqual(initialState)
    })

    it("should handle SET_FILTER", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: AppBarActionType.SET_FILTER,
        payload: "descriptor",
      }
      const expectedState = {
        filter: action.payload,
        searchValue: "",
        helpDialogOpen: false,
      }
      // @ts-ignore
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_SEARCH_VALUE", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: AppBarActionType.SET_SEARCH_VALUE,
        payload: "tester",
      }
      const expectedState = {
        filter: "id",
        searchValue: action.payload,
        helpDialogOpen: false,
      }
      // @ts-ignore
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_HELP_DIALOG_OPEN", () => {
      const initialState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: false,
      }
      const action = {
        type: AppBarActionType.SET_HELP_DIALOG_OPEN,
        payload: true,
      }
      const expectedState = {
        filter: "id",
        searchValue: "",
        helpDialogOpen: true,
      }
      // @ts-ignore
      expect(appBarReducer(initialState, action)).toEqual(expectedState)
    })
  })
})

// describe("useAppBarStore", () => {
//   it("should throw error if not used in Provider", () => {
//     const wrapper = ({ children }) => <div>{children}</div>
//     const { result } = renderHook(() => useAppBarStore(), { wrapper })
//     expect(() => result.current).toThrow()
//   })
// })
