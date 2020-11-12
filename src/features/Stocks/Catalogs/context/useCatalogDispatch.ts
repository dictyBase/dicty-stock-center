import { DocumentNode } from "@apollo/client"
import { CatalogActionType, QueryVariables } from "./CatalogContext"
import useCatalogStore from "./useCatalogStore"

/**
 * useCatalogDispatch provides helper functions for dispatching
 * actions related to the catalog pages.
 */
const useCatalogDispatch = () => {
  const { dispatch } = useCatalogStore()

  const setSearchValue = (value: string) =>
    dispatch({
      type: CatalogActionType.SET_SEARCH_VALUE,
      payload: value,
    })

  const setSearchBoxDropdownValue = (value: string) =>
    dispatch({
      type: CatalogActionType.SET_SEARCHBOX_DROPDOWN_VALUE,
      payload: value,
    })

  const setLeftDropdownValue = (value: string) =>
    dispatch({
      type: CatalogActionType.SET_LEFT_DROPDOWN_VALUE,
      payload: value,
    })

  const setQuery = (query: DocumentNode) =>
    dispatch({
      type: CatalogActionType.SET_QUERY,
      payload: query,
    })

  const setQueryVariables = (variables: QueryVariables) =>
    dispatch({
      type: CatalogActionType.SET_QUERY_VARIABLES,
      payload: variables,
    })

  const setHelpDialogOpen = (bool: boolean) =>
    dispatch({
      type: CatalogActionType.SET_HELP_DIALOG_OPEN,
      payload: bool,
    })

  return {
    setSearchValue,
    setSearchBoxDropdownValue,
    setLeftDropdownValue,
    setQuery,
    setQueryVariables,
    setHelpDialogOpen,
  }
}

export default useCatalogDispatch
