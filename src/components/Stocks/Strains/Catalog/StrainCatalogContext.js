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
  const [filter, setFilter] = useState("id")
  const [checkedItems, setCheckedItems] = useState([])
  const [cartDialogOpen, setCartDialogOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const handleCheckboxChange = (id, label, summary) => event => {
    // if checkbox is already checked, remove that item from state
    if (checkedItems.some(item => item.id === id)) {
      setCheckedItems(checkedItems.filter(item => item.id !== id))
    } else {
      setCheckedItems([...checkedItems, { id, label, summary }])
    }
  }

  const handleCheckAllChange = () => {
    if (checkedItems.length > 0) {
      setCheckedItems([])
    }
  }

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
        handleCheckboxChange,
        handleCheckAllChange,
        searchValue,
        setSearchValue,
      }}>
      {children}
    </StrainCatalogContext.Provider>
  )
}

export const useStrainCatalogState = () => useContext(StrainCatalogContext)
