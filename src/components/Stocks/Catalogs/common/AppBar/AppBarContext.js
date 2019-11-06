// @flow
import React, { createContext, useContext, useState } from "react"

export const AppBarContext: Object = createContext()

/**
 * AppBarProvider contains "global" state used for the App Bar on catalog pages.
 * This removes the need for prop drilling through multiple components.
 */

export const AppBarProvider = ({ children }: any) => {
  const [filter, setFilter] = useState<string>("id")
  const [searchValue, setSearchValue] = useState<string>("")
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false)

  return (
    <AppBarContext.Provider
      value={{
        filter,
        setFilter,
        searchValue,
        setSearchValue,
        helpDialogOpen,
        setHelpDialogOpen,
      }}>
      {children}
    </AppBarContext.Provider>
  )
}

export const useAppBarState = () => useContext(AppBarContext)
