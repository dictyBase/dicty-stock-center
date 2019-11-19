import React, { useMemo, useReducer } from "react"
import catalogReducer from "components/Stocks/Catalogs/reducers/catalogReducer"
import CatalogContext from "components/Stocks/Catalogs/common/CatalogContext"

const CatalogProvider = ({ query, children }: any) => {
  const [state, dispatch] = useReducer(catalogReducer, {
    query: query,
    queryVariables: { cursor: 0 },
    checkedItems: [],
    cartDialogOpen: false,
  })
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  )
}

export default CatalogProvider
