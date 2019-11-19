// @flow
import React, { createContext, useContext, useMemo, useReducer } from "react"
import gql from "graphql-tag"
import catalogReducer from "components/Stocks/Catalogs/reducers/catalogReducer"

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
  const [state, dispatch] = useReducer(catalogReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <PlasmidCatalogContext.Provider value={value}>
      {children}
    </PlasmidCatalogContext.Provider>
  )
}

export const usePlasmidCatalogState = () => useContext(PlasmidCatalogContext)
