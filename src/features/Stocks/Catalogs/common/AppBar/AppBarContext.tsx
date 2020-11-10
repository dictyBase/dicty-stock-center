import React, { createContext, useContext, useReducer, useMemo } from "react"

type AppBarState = {
  /** The search filter selected from the middle dropdown menu (i.e. Descriptor, Summary, ID) */
  searchBoxDropdownValue: string
  /** The value typed into the search box by the user */
  searchValue: string
  /** The current state of the help dialog box */
  helpDialogOpen: boolean
  /** The value selected from the left dropdown menu */
  leftDropdownValue: string
}

enum AppBarActionType {
  SET_SEARCHBOX_DROPDOWN_VALUE = "SET_SEARCHBOX_DROPDOWN_VALUE",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_HELP_DIALOG_OPEN = "SET_HELP_DIALOG_OPEN",
  SET_LEFT_DROPDOWN_VALUE = "SET_LEFT_DROPDOWN_VALUE",
}

type Action =
  | {
      type: AppBarActionType.SET_SEARCHBOX_DROPDOWN_VALUE
      payload: string
    }
  | {
      type: AppBarActionType.SET_SEARCH_VALUE
      payload: string
    }
  | {
      type: AppBarActionType.SET_HELP_DIALOG_OPEN
      payload: boolean
    }
  | {
      type: AppBarActionType.SET_LEFT_DROPDOWN_VALUE
      payload: string
    }

const strainInitialState = {
  leftDropdownValue: "all",
  searchBoxDropdownValue: "label",
  searchValue: "",
  helpDialogOpen: false,
}

const plasmidInitialState = {
  leftDropdownValue: "all",
  searchBoxDropdownValue: "plasmid_name",
  searchValue: "",
  helpDialogOpen: false,
}

type AppBarStateContextProps = {
  state: AppBarState
  dispatch: React.Dispatch<Action>
}

const AppBarContext = createContext<AppBarStateContextProps>(
  {} as AppBarStateContextProps,
)

const appBarReducer = (state: AppBarState, action: Action) => {
  switch (action.type) {
    case AppBarActionType.SET_SEARCHBOX_DROPDOWN_VALUE:
      return {
        ...state,
        searchBoxDropdownValue: action.payload,
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
    case AppBarActionType.SET_LEFT_DROPDOWN_VALUE:
      return {
        ...state,
        leftDropdownValue: action.payload,
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
  const value = useMemo(() => ({ state, dispatch }), [state])

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
