// @flow
import React, { createContext, useContext, useMemo, useReducer } from "react"
import gql from "graphql-tag"

export const PlasmidCatalogContext: Object = createContext()

export const GET_PLASMID_LIST = gql`
  query PlasmidList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

const plasmidCatalogReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      }
    case "SET_QUERY_VARIABLES":
      return {
        ...state,
        queryVariables: action.payload,
      }
    case "SET_CHECKED_ITEMS":
      return {
        ...state,
        checkedItems: action.payload,
      }
    case "SET_CART_DIALOG_OPEN": {
      return {
        ...state,
        cartDialogOpen: action.payload,
      }
    }
    default:
      return state
  }
}

const initialState = {
  query: GET_PLASMID_LIST,
  queryVariables: { cursor: 0 },
  checkedItems: [],
  cartDialogOpen: false,
}

/**
 * PlasmidCatalogProvider contains "global" state used for the Plasmid
 * Catalog page. This removes the need for prop drilling through multiple
 * components.
 */

export const PlasmidCatalogProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(plasmidCatalogReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <PlasmidCatalogContext.Provider value={value}>
      {children}
    </PlasmidCatalogContext.Provider>
  )
}

export const usePlasmidCatalogState = () => useContext(PlasmidCatalogContext)
