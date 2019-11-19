// @flow
import React, { createContext, useContext, useMemo, useReducer } from "react"
import gql from "graphql-tag"
import catalogReducer from "components/Stocks/Catalogs/reducers/catalogReducer"

export const StrainCatalogContext: Object = createContext()

export const GET_STRAIN_LIST = gql`
  query StrainList($cursor: Int!) {
    listStrains(input: { cursor: $cursor, limit: 10 }) {
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

const initialState = {
  query: GET_STRAIN_LIST,
  queryVariables: { cursor: 0 },
  checkedItems: [],
  cartDialogOpen: false,
}

/**
 * StrainCatalogProvider contains "global" state used for the Strain
 * Catalog page. This removes the need for prop drilling through multiple
 * components.
 */

export const StrainCatalogProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(catalogReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <StrainCatalogContext.Provider value={value}>
      {children}
    </StrainCatalogContext.Provider>
  )
}

export const useStrainCatalogState = () => useContext(StrainCatalogContext)
