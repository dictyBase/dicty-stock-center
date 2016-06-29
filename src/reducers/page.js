import types from 'constants'

const { EDIT_PAGE } = types

const initialState = {
    content: null
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
    case EDIT_PAGE:
        return {
            ...state,
            content: action.payload.content
        }
    default:
        return state
    }
}

export default pageReducer
