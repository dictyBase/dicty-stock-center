import React, { createContext, useContext, useReducer, useMemo } from "react"

type AppBarState = {
  /** The search filter selected from the middle dropdown menu (i.e. Descriptor, Summary, ID) */
  filter: String
  /** The value typed into the search box by the user */
  searchValue: String
  /** The current state of the help dialog box */
  helpDialogOpen: boolean
}

enum AppBarActionType {
  SET_FILTER = "SET_FILTER",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_HELP_DIALOG_OPEN = "SET_HELP_DIALOG_OPEN",
}

type Action =
  | {
      type: AppBarActionType.SET_FILTER
      payload: string
    }
  | {
      type: AppBarActionType.SET_SEARCH_VALUE
      payload: string
    }
  | { type: AppBarActionType.SET_HELP_DIALOG_OPEN; payload: boolean }

const strainInitialState = {
  filter: "label",
  searchValue: "",
  helpDialogOpen: false,
}

const plasmidInitialState = {
  filter: "plasmid_name",
  searchValue: "",
  helpDialogOpen: false,
}

const AppBarContext = createContext({} as any)

const appBarReducer = (state: AppBarState, action: Action) => {
  switch (action.type) {
    case AppBarActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    case AppBarActionType.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      }
    case AppBarActionType.SET_HELP_DIALOG_OPEN:
      return {
        ...state,
        helpDialogOpen: action.payload,
      }
    default:
      return state
  }
}

/**
 * AppBarProvider contains "global" state used for the App Bar on catalog pages.
 * This removes the need for prop drilling through multiple components.
 */

const AppBarProvider = ({
  children,
  stockType,
}: {
  children: React.ReactNode
  stockType?: string
}) => {
  const initialState =
    stockType === "plasmid" ? plasmidInitialState : strainInitialState
  const [state, dispatch] = useReducer(appBarReducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return (
    <AppBarContext.Provider value={value}>{children}</AppBarContext.Provider>
  )
}

const useAppBarStore = () => {
  const context = useContext(AppBarContext)
  if (!context) {
    throw new Error("useAppBarStore must be used within an AppBarProvider")
  }

  return context
}

export {
  AppBarContext,
  appBarReducer,
  AppBarProvider,
  useAppBarStore,
  AppBarActionType,
}
