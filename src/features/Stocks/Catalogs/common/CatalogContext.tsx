import React, { createContext, useContext, useMemo, useReducer } from "react"
import { DocumentNode } from "@apollo/client"
import {
  GET_STRAIN_LIST,
  GET_PLASMID_LIST,
  GET_BACTERIAL_STRAIN_LIST,
} from "common/graphql/queries"
import useSearchQuery from "common/hooks/useSearchQuery"

type CatalogState = {
  /** The actual GraphQL query (no variables) */
  query: DocumentNode
  /** Variables used for GraphQL query */
  queryVariables: {
    limit?: number
    cursor: number
    filter: String
  }
  /** Array of currently checked items */
  checkedItems: Array<any>
  /** The search filter selected from the middle dropdown menu (i.e. Descriptor, Summary, ID) */
  searchBoxDropdownValue: string
  /** The value typed into the search box by the user */
  searchValue: string
  /** The current state of the help dialog box */
  helpDialogOpen: boolean
  /** The value selected from the left dropdown menu */
  leftDropdownValue: string
}

enum CatalogActionType {
  SET_QUERY_VARIABLES = "SET_QUERY_VARIABLES",
  SET_QUERY = "SET_QUERY",
  SET_CHECKED_ITEMS = "SET_CHECKED_ITEMS",
  SET_SEARCHBOX_DROPDOWN_VALUE = "SET_SEARCHBOX_DROPDOWN_VALUE",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_HELP_DIALOG_OPEN = "SET_HELP_DIALOG_OPEN",
  SET_LEFT_DROPDOWN_VALUE = "SET_LEFT_DROPDOWN_VALUE",
}

type Action =
  | {
      type: CatalogActionType.SET_QUERY_VARIABLES
      payload: {
        limit?: number
        cursor: number
        filter: String
      }
    }
  | {
      type: CatalogActionType.SET_QUERY
      payload: DocumentNode
    }
  | {
      type: CatalogActionType.SET_CHECKED_ITEMS
      payload: Array<any>
    }
  | {
      type: CatalogActionType.SET_SEARCHBOX_DROPDOWN_VALUE
      payload: string
    }
  | {
      type: CatalogActionType.SET_SEARCH_VALUE
      payload: string
    }
  | {
      type: CatalogActionType.SET_HELP_DIALOG_OPEN
      payload: boolean
    }
  | {
      type: CatalogActionType.SET_LEFT_DROPDOWN_VALUE
      payload: string
    }

const initialState = {
  queryVariables: { cursor: 0, limit: 10, filter: "" },
  checkedItems: [],
  leftDropdownValue: "all",
  searchValue: "",
  helpDialogOpen: false,
}

const strainInitialState = {
  ...initialState,
  query: GET_STRAIN_LIST,
  searchBoxDropdownValue: "label",
}

const plasmidInitialState = {
  ...initialState,
  query: GET_PLASMID_LIST,
  searchBoxDropdownValue: "plasmid_name",
}

type CatalogStateContextProps = {
  state: CatalogState
  dispatch: React.Dispatch<Action>
}

const CatalogContext = createContext<CatalogStateContextProps>(
  {} as CatalogStateContextProps,
)

const catalogReducer = (state: CatalogState, action: Action) => {
  switch (action.type) {
    case CatalogActionType.SET_QUERY_VARIABLES:
      return {
        ...state,
        queryVariables: action.payload,
      }
    case CatalogActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      }
    case CatalogActionType.SET_CHECKED_ITEMS:
      return {
        ...state,
        checkedItems: action.payload,
      }
    case CatalogActionType.SET_SEARCHBOX_DROPDOWN_VALUE:
      return {
        ...state,
        searchBoxDropdownValue: action.payload,
      }
    case CatalogActionType.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      }
    case CatalogActionType.SET_HELP_DIALOG_OPEN:
      return {
        ...state,
        helpDialogOpen: action.payload,
      }
    case CatalogActionType.SET_LEFT_DROPDOWN_VALUE:
      return {
        ...state,
        leftDropdownValue: action.payload,
      }
    default:
      return state
  }
}

const getGraphQLFilterFromSearchQuery = (query: URLSearchParams) => {
  const label = query.get("label")
  const summary = query.get("summary")
  const id = query.get("id")
  const plasmidName = query.get("name")
  const description = query.get("description")
  let filter = ""

  if (label) {
    filter = `label~${label}`
  }
  if (summary) {
    filter = `summary~${summary}`
  }
  if (id) {
    filter = `id~${id}`
  }
  if (plasmidName) {
    filter = `plasmid_name~${plasmidName}`
  }
  if (description) {
    filter = `description~${description}`
  }

  return filter
}

const getGraphQLQueryFromSearchQuery = (
  stockType: string,
  query: URLSearchParams,
) => {
  const filter = query.get("filter")
  if (filter === "bacterial") {
    return GET_BACTERIAL_STRAIN_LIST
  }
  if (stockType === "plasmid") {
    return GET_PLASMID_LIST
  }
  return GET_STRAIN_LIST
}

/**
 * CatalogProvider contains "global" state used for the stock catalog
 * pages. This includes all appbar state as well.
 */
const CatalogProvider = ({
  children,
  stockType,
}: {
  children: React.ReactNode
  stockType?: string
}) => {
  // initial state varies based on stock or plasmid
  const initialState =
    stockType === "plasmid" ? plasmidInitialState : strainInitialState
  // set initial state to use search filter if query strings exist
  const searchQuery = useSearchQuery()
  const [state, dispatch] = useReducer(catalogReducer, {
    ...initialState,
    query: getGraphQLQueryFromSearchQuery(stockType || "strain", searchQuery),
    queryVariables: {
      cursor: 0,
      limit: 10,
      filter: getGraphQLFilterFromSearchQuery(searchQuery),
    },
  })
  const value = useMemo(() => ({ state, dispatch }), [state])

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  )
}

const useCatalogStore = () => {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error("useCatalogStore must be used within a CatalogProvider")
  }

  return context
}

export {
  CatalogContext,
  catalogReducer,
  CatalogProvider,
  useCatalogStore,
  CatalogActionType,
  strainInitialState,
}
