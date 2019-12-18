// @flow
import React, { createContext, useContext, useReducer, useMemo } from "react"
import { appBarTypes } from "constants/appBar"

const AppBarContext: Object = createContext()

const appBarReducer = (state: Object, action: Object) => {
  switch (action.type) {
    case appBarTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    case appBarTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      }
    case appBarTypes.SET_HELP_DIALOG_OPEN:
      return {
        ...state,
        helpDialogOpen: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  filter: "id",
  searchValue: "",
  helpDialogOpen: false,
}

/**
 * AppBarProvider contains "global" state used for the App Bar on catalog pages.
 * This removes the need for prop drilling through multiple components.
 */

const AppBarProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appBarReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <AppBarContext.Provider value={value}>{children}</AppBarContext.Provider>
  )
}

const useAppBarStore = () => {
  const context = useContext(AppBarContext)
  if (!context) {
    throw new Error("useAppBarStore must be used within an AppBarProvider")
  }
  return context
}

export { AppBarContext, appBarReducer, AppBarProvider, useAppBarStore }
