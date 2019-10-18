// @flow
import React, { createContext, useContext, useState } from "react"
import { GET_STRAIN_LIST } from "./StrainCatalogContainer"

export const StrainCatalogContext: Object = createContext()

/**
 * StrainCatalogProvider contains "global" state used for the Strain
 * Catalog page. This removes the need for prop drilling through multiple
 * components.
 */

export const StrainCatalogProvider = ({ children }: any) => {
  const [query, setQuery] = useState<string>(GET_STRAIN_LIST)
  const [queryVariables, setQueryVariables] = useState<Object>({
    cursor: 0,
  })
  const [checkedItems, setCheckedItems] = useState<Array<Object>>([])
  const [cartDialogOpen, setCartDialogOpen] = useState<boolean>(false)

  const handleCheckboxChange = (id: string, label: string, summary: string) => (
    event: SyntheticEvent<>,
  ) => {
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
        queryVariables,
        setQueryVariables,
        cartDialogOpen,
        setCartDialogOpen,
        checkedItems,
        setCheckedItems,
        handleCheckboxChange,
        handleCheckAllChange,
      }}>
      {children}
    </StrainCatalogContext.Provider>
  )
}

export const useStrainCatalogState = () => useContext(StrainCatalogContext)
