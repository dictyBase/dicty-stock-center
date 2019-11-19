const catalogReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      }
    case "SET_QUERY_VARIABLES":
      return {
        ...state,
        queryVariables: action.payload,
      }
    case "SET_CHECKED_ITEMS":
      return {
        ...state,
        checkedItems: action.payload,
      }
    case "SET_CART_DIALOG_OPEN": {
      return {
        ...state,
        cartDialogOpen: action.payload,
      }
    }
    default:
      return state
  }
}

export default catalogReducer
