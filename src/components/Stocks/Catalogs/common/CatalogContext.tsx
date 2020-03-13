import React, { createContext, useContext, useMemo, useReducer } from "react"

type CatalogState = {
  queryVariables: {
    cursor: number
    filter: String
  }
  checkedItems: Array<any>
}

enum CatalogActionType {
  SET_QUERY_VARIABLES = "SET_QUERY_VARIABLES",
  SET_CHECKED_ITEMS = "SET_CHECKED_ITEMS",
}

type Action =
  | {
      type: CatalogActionType.SET_QUERY_VARIABLES
      payload: {
        cursor: number
        filter: String
      }
    }
  | {
      type: CatalogActionType.SET_CHECKED_ITEMS
      payload: Array<any>
    }

const CatalogContext = createContext({} as any)

const initialState = {
  queryVariables: { cursor: 0, filter: "" },
  checkedItems: [],
}

const catalogReducer = (state: CatalogState, action: Action) => {
  switch (action.type) {
    case CatalogActionType.SET_QUERY_VARIABLES:
      return {
        ...state,
        queryVariables: action.payload,
      }
    case CatalogActionType.SET_CHECKED_ITEMS:
      return {
        ...state,
        checkedItems: action.payload,
      }
    default:
      return state
  }
}

/**
 * CatalogProvider contains "global" state used for the stock catalog
 * pages. This removes the need for prop drilling through multiple
 * components.
 */

const CatalogProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(catalogReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  )
}

const useCatalogStore = () => {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error("useCatalogStore must be used within a CatalogProvider")
  }
  return context
}

export {
  CatalogContext,
  catalogReducer,
  CatalogProvider,
  useCatalogStore,
  CatalogActionType,
}
