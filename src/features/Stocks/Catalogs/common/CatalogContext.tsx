import React, { createContext, useContext, useMemo, useReducer } from "react"
import { DocumentNode } from "@apollo/client"
import { GET_STRAIN_LIST, GET_PLASMID_LIST } from "common/graphql/queries"

type CatalogState = {
  query: DocumentNode
  queryVariables: {
    limit?: number
    cursor: number
    filter: String
  }
  checkedItems: Array<any>
}

enum CatalogActionType {
  SET_QUERY_VARIABLES = "SET_QUERY_VARIABLES",
  SET_QUERY = "SET_QUERY",
  SET_CHECKED_ITEMS = "SET_CHECKED_ITEMS",
}

type Action =
  | {
      type: CatalogActionType.SET_QUERY_VARIABLES
      payload: {
        limit?: number
        cursor: number
        filter: String
      }
    }
  | {
      type: CatalogActionType.SET_QUERY
      payload: DocumentNode
    }
  | {
      type: CatalogActionType.SET_CHECKED_ITEMS
      payload: Array<any>
    }

const strainInitialState = {
  queryVariables: { cursor: 0, limit: 10, filter: "" },
  query: GET_STRAIN_LIST,
  checkedItems: [],
}

const plasmidInitialState = {
  queryVariables: { cursor: 0, limit: 10, filter: "" },
  query: GET_PLASMID_LIST,
  checkedItems: [],
}

type CatalogStateContextProps = {
  state: CatalogState
  dispatch: React.Dispatch<Action>
}

const CatalogContext = createContext<CatalogStateContextProps>(
  {} as CatalogStateContextProps,
)

const catalogReducer = (state: CatalogState, action: Action) => {
  switch (action.type) {
    case CatalogActionType.SET_QUERY_VARIABLES:
      return {
        ...state,
        queryVariables: action.payload,
      }
    case CatalogActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload,
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

const CatalogProvider = ({
  children,
  stockType,
}: {
  children: React.ReactNode
  stockType?: string
}) => {
  const initialState =
    stockType === "plasmid" ? plasmidInitialState : strainInitialState
  const [state, dispatch] = useReducer(catalogReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

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
