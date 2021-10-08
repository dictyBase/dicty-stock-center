import React, { createContext, useMemo, useReducer } from "react"
import { DocumentNode } from "@apollo/client"
import {
  ListBacterialStrainsDocument,
  ListStrainsInventoryDocument,
  StrainListDocument,
  PlasmidListFilterDocument,
  ListPlasmidsInventoryDocument,
} from "dicty-graphql-schema"
import useSearchQuery from "common/hooks/useSearchQuery"

type QueryVariables = {
  cursor: number
  limit: number
  filter?: string
}

type CatalogState = {
  /** The actual GraphQL query (no variables) */
  query: DocumentNode
  /** Variables used for GraphQL query */
  queryVariables: QueryVariables
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
  /** List of active filters (Chips) displayed in AppBarSearch */
  activeFilters: string[]
}

enum CatalogActionType {
  SET_QUERY_VARIABLES = "SET_QUERY_VARIABLES",
  SET_QUERY = "SET_QUERY",
  SET_CHECKED_ITEMS = "SET_CHECKED_ITEMS",
  SET_SEARCHBOX_DROPDOWN_VALUE = "SET_SEARCHBOX_DROPDOWN_VALUE",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_HELP_DIALOG_OPEN = "SET_HELP_DIALOG_OPEN",
  SET_LEFT_DROPDOWN_VALUE = "SET_LEFT_DROPDOWN_VALUE",
  SET_ACTIVE_FILTERS = "SET_ACTIVE_FILTERS",
}

type Action =
  | {
      type: CatalogActionType.SET_QUERY_VARIABLES
      payload: QueryVariables
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
  | {
      type: CatalogActionType.SET_ACTIVE_FILTERS
      payload: string[]
    }

const initialState = {
  queryVariables: { cursor: 0, limit: 10, filter: "" },
  checkedItems: [],
  leftDropdownValue: "all",
  searchValue: "",
  helpDialogOpen: false,
  activeFilters: [],
}

const strainInitialState = {
  ...initialState,
  query: StrainListDocument,
  searchBoxDropdownValue: "label",
}

const plasmidInitialState = {
  ...initialState,
  query: PlasmidListFilterDocument,
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
    case CatalogActionType.SET_ACTIVE_FILTERS:
      return {
        ...state,
        activeFilters: [...action.payload],
      }
    default:
      return state
  }
}

const getGraphQLFilterFromSearchQuery = (query: URLSearchParams) => {
  const label = query.get("label")
  const summary = query.get("summary")
  const id = query.get("id")
  const plasmidName = query.get("plasmid_name")
  const description = query.get("description")
  let filter = ""

  if (label) {
    filter = `label=~${label}`
  }
  if (summary) {
    filter = `summary=~${summary}`
  }
  if (id) {
    filter = `id=~${id}`
  }
  if (plasmidName) {
    filter = `plasmid_name=~${plasmidName}`
  }
  if (description) {
    filter = `description=~${description}`
  }

  return filter
}

const getPlasmidQuery = (filter: string | null) => {
  if (filter === "available") {
    return ListPlasmidsInventoryDocument
  }
  return PlasmidListFilterDocument
}

const getStrainQuery = (filter: string | null) => {
  if (filter === "bacterial") {
    return ListBacterialStrainsDocument
  }
  if (filter === "available") {
    return ListStrainsInventoryDocument
  }
  return StrainListDocument
}

const getGraphQLQueryFromSearchQuery = (
  stockType: string,
  query: URLSearchParams,
) => {
  const filter = query.get("filter")
  let gqlQuery = StrainListDocument

  if (stockType === "plasmid") {
    gqlQuery = getPlasmidQuery(filter)
  }

  if (stockType === "strain") {
    gqlQuery = getStrainQuery(filter)
  }

  return gqlQuery
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
  stockType: string
}) => {
  // initial state varies based on stock or plasmid
  const initialState =
    stockType === "plasmid" ? plasmidInitialState : strainInitialState
  // set initial state to use search filter if query strings exist
  const searchQuery = useSearchQuery()
  const [state, dispatch] = useReducer(catalogReducer, {
    ...initialState,
    query: getGraphQLQueryFromSearchQuery(stockType, searchQuery),
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

export type { Action, QueryVariables }
export {
  CatalogContext,
  CatalogProvider,
  CatalogActionType,
  catalogReducer,
  strainInitialState,
  getGraphQLFilterFromSearchQuery,
  getGraphQLQueryFromSearchQuery,
}
