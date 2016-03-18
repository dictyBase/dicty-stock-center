import types from '../constants'

const { FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAILURE } = types

const initialState = {
    submitted: false
}

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
    case FORM_SUBMIT_REQUEST:
        return {
            ...state,
            submitted: false
        }
    case FORM_SUBMIT_SUCCESS:
        return {
            ...state,
            submitted: true,
            data: action.data
        }
    case FORM_SUBMIT_FAILURE:
        return {
            ...state,
            submitted: false,
            error: action.error
        }
    default:
        return state
    }
}
export default orderFormReducer
