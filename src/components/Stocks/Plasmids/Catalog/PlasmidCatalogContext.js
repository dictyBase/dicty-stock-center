// @flow
import React, { createContext, useContext, useState } from "react"
import { GET_PLASMID_LIST } from "./PlasmidCatalogContainer"

export const PlasmidCatalogContext: Object = createContext()

/**
 * PlasmidCatalogProvider contains "global" state used for the Plasmid
 * Catalog page. This removes the need for prop drilling through multiple
 * components.
 */

export const PlasmidCatalogProvider = ({ children }: any) => {
  const [query, setQuery] = useState<string>(GET_PLASMID_LIST)
  const [variables, setVariables] = useState<Object>({ cursor: 0 })
  const [filter, setFilter] = useState<string>("plasmid_name")
  const [checkedItems, setCheckedItems] = useState<Array<Object>>([])
  const [cartDialogOpen, setCartDialogOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false)

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
    <PlasmidCatalogContext.Provider
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
        helpDialogOpen,
        setHelpDialogOpen,
      }}>
      {children}
    </PlasmidCatalogContext.Provider>
  )
}

export const usePlasmidCatalogState = () => useContext(PlasmidCatalogContext)
