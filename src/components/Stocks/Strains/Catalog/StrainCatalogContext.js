// @flow
import React, { createContext, useContext, useState } from "react"
import { GET_STRAIN_LIST } from "./StrainCatalogContainer"

export const StrainCatalogContext = createContext()

/**
 * StrainCatalogProvider contains "global" state used for the Strain
 * Catalog page. This removes the need for prop drilling through multiple
 * components.
 */

export const StrainCatalogProvider = ({ children }) => {
  const [query, setQuery] = useState(GET_STRAIN_LIST)
  const [variables, setVariables] = useState({ cursor: 0 })
  const [filter, setFilter] = useState("")
  const [checkedItems, setCheckedItems] = useState([])
  const [cartDialogOpen, setCartDialogOpen] = useState(false)

  return (
    <StrainCatalogContext.Provider
      value={{
        query,
        setQuery,
        variables,
        setVariables,
        filter,
        setFilter,
        checkedItems,
        setCheckedItems,
        cartDialogOpen,
        setCartDialogOpen,
      }}>
      {children}
    </StrainCatalogContext.Provider>
  )
}

export const useStrainCatalogState = () => useContext(StrainCatalogContext)
