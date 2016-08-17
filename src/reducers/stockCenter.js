import types from 'constants'

const { AVAILABILITY_FETCH_SUCCESS, AVAILABILITY_FETCH_REQUEST, AVAILABILITY_FETCH_FAILURE } = types

const initialState = {
    isFetching: false
}

const stockCenterReducer = (state = initialState, action) => {
    switch (action.type) {
    case AVAILABILITY_FETCH_REQUEST:
        return {
            ...state,
            isFetching: true
        }
    case AVAILABILITY_FETCH_SUCCESS:
        return {
            ...state,
            isFetching: false,
            availability: action.availability
        }
    case AVAILABILITY_FETCH_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.error
        }
    default:
        return state
    }
}

export default stockCenterReducer
